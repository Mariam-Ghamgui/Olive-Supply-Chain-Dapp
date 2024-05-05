// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract SupplyChain {

   address public Owner;

   constructor() {
        Owner = msg.sender; 

    }
    modifier onlyByOwner() {
        require(msg.sender == Owner);
        _;
    }

    uint256 public lhcCtr = 0;
 
    struct LotHuileCreator {
        address addr;
        uint256 id; 
        string name; 
        string place; 
    }

    mapping(uint256 => LotHuileCreator) public LHC;

    struct moulin {
        uint256 id_moulin;
        string nom_moulin;
        string localisation_moulin;
    }

    mapping(uint256 => moulin) public Moulins;

    
    struct Moulinage {
        uint256 id_moulinage;
        uint256[] id_lots_olive;
        uint256 id_moul;
        string date_moulinage;
        string extraction_type;
        string solvant_type;
        uint256 quantite_olive;
    }

    mapping(uint256 => Moulinage) public Moulinages;

    struct LotHuile {
        uint256 id_lot_huile;
        uint256 quantite_obtenue;
        uint256 nombre_citernes;
        uint256 taux_acide;
        string type_huile;
    }

    mapping(uint256 => LotHuile) public LotsHuile;
      

    enum CiterneType {
        C500L,
        C1000L
    }

        struct Citerne {
        uint256 id_citerne;
        uint256[] id_lots_huile;
        string emplacement;
        uint256 capaciteReelle;
        CiterneType citerne_type;
    }

    mapping(uint256 => Citerne) public Citernes;

    uint256 public moulinCtr = 0;
    uint256 public moulinageCtr = 0;
    uint256 public lotHuileCtr = 0;
    uint256 public citerneCtr = 0;


    function addLHC(
        address _address,
        string memory _name,
        string memory _place
    ) public onlyByOwner() {
        lhcCtr++;
        LHC[lhcCtr] = LotHuileCreator(_address, lhcCtr, _name, _place);
    }

    function addMoulin(
        string memory _nom_moulin, string memory _localisation_moulin
    ) public  {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        moulinCtr++;
        Moulins[moulinCtr] = moulin(moulinCtr, _nom_moulin, _localisation_moulin);
    }

     function findAddress(address _address) private view returns (uint256) {
        require(lhcCtr > 0);
        for (uint256 i = 1; i <= lhcCtr; i++) {
            if (LHC[i].addr == _address) return LHC[i].id;
        }
        return 0;
    }

    function addMoulinage(
        uint256[] memory _id_lots_olive,
        uint256 _id_moul,
        string memory _date_moulinage,
        string memory _extraction_type,
        string memory _solvant_type,
        uint256 _quantite_olive
    ) public {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        moulinageCtr++;
        Moulinages[moulinageCtr] = Moulinage(moulinageCtr, _id_lots_olive, _id_moul, _date_moulinage, _extraction_type, _solvant_type, _quantite_olive);
    }

    function addLotHuile(
        uint256 _quantite_obtenue,
        uint256 _nombre_citernes,
        uint256 _taux_acide,
        string memory _type_huile
    ) public {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        lotHuileCtr++;
        LotsHuile[lotHuileCtr] = LotHuile(lotHuileCtr, _quantite_obtenue, _nombre_citernes, _taux_acide, _type_huile);
    }

    function addCiterne(
        uint256[] memory _id_lots_huile,
        string memory _emplacement,
        uint256 _capacite_reelles,
        CiterneType _type_citerne
    ) public {
        uint256 _id = findAddress(msg.sender);
        require(_id > 0);
        citerneCtr++;
        Citernes[citerneCtr] = Citerne(citerneCtr, _id_lots_huile, _emplacement, _capacite_reelles, _type_citerne);
    }

    function getMoulins(uint256 _index) public view returns (moulin memory) {
        return Moulins[_index];
    }
    function getMoulinage(uint256 _cle) public view returns (Moulinage memory) {
        return Moulinages[_cle];
    }
    function getLotHuile(uint256 _cle) public view returns (LotHuile memory) {
        return LotsHuile[_cle];
    }
    function getCiterne(uint256 _cle) public view returns (Citerne memory) {
        return Citernes[_cle];
    }

    }