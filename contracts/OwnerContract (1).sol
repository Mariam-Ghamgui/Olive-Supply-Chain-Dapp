// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SupplyChain {

    address public Owner;

    constructor()  {
        Owner = msg.sender;
    }
    
    modifier onlyByOwner() {
        require(msg.sender == Owner);
        _;
    }
 
    uint256 public locCtr = 0;
 
    struct LotOliveCreator {
        address addr;
        uint256 id; 
        string name; 
        string place; 
    }

    mapping(uint256 => LotOliveCreator) public LOC;
 
 
    struct berger {
        uint256 id_berger;
        string nom;
        string localisation;
    }

    mapping(uint256 => berger) public Bergers;
    
    enum STAGE {
        Init,
        Envoyer  
    } 
    struct lotOlives {
        uint256 id_lot;
        uint256 id_ber;
        string variete;
        uint256 quantite;
        string  date_recolte;
        string date_reception;
        STAGE  stage;
    }

    mapping(uint256 => lotOlives) public LotOlives;


    function addLOC(
        address _address,
        string memory _name,
        string memory _place
    ) public onlyByOwner() {
        locCtr++;
        LOC[locCtr] = LotOliveCreator(_address, locCtr, _name, _place);
    }

    uint256 public bergerCtr = 0;
    uint256 public lotCtr = 0;


    function addBerger(
        string memory _nom,
        string memory _place
    ) public {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        bergerCtr++;
        Bergers[bergerCtr] = berger(bergerCtr, _nom, _place);
    }

    function findAddress(address _address) private view returns (uint256) {
        require(locCtr > 0);
        for (uint256 i = 1; i <= locCtr; i++) {
            if (LOC[i].addr == _address) return LOC[i].id;
        }
        return 0;
    }


    function addLots(
        uint256 _id_ber,
        string memory  _variete,
        uint256 _quantite,
        string  memory _date_recolte
    ) public {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        lotCtr++;
        LotOlives[lotCtr] = lotOlives(lotCtr,_id_ber,_variete,_quantite,_date_recolte,"0",STAGE.Init);

    }
    
    function Envoyer(uint256 _ID, string memory date) public {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        LotOlives[_ID].stage = STAGE.Envoyer;
        LotOlives[_ID].date_reception = date;
    }
    
    function showStage(uint256 _ID)
        public view returns (string memory)
    {
        if (LotOlives[_ID].stage == STAGE.Init)
            return "Envoie en cours";
        else 
            return "Envoye";
    }



    function getLots (uint256 _index) public view returns (lotOlives memory){
         return LotOlives [_index] ;
    }
    function getBergers(uint256 _cle) public view returns (berger memory){
        return Bergers [_cle];
    }

}