const web3 = new Web3(window.ethereum);

// Function to check if MetaMask is available
async function checkMetaMaskAvailability() {
  if (window.ethereum) {
    try {
      // Request access to MetaMask accounts
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return true;
    } catch (err) {
      console.error("Failed to connect to MetaMask:", err);
      return false;
    }
  } else {
    console.error("MetaMask not found");
    return false;
  }
}

document.getElementById("metamask").addEventListener("click", async () => {
  const metaMaskAvailable = await checkMetaMaskAvailability();
  if (metaMaskAvailable) {
    await ConnectWallet();
  } else {
    // MetaMask not available
    console.error("MetaMask not found");
  }
});

// Function to connect to MetaMask
async function ConnectWallet() {
  try {
    // Request access to MetaMask accounts
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // Update status
    document.getElementById("status1").innerText = "Connected to MetaMask";
    document.getElementById("status1").style.color = "green";
  } catch (err) {
    // Handle error
    console.error("Failed to connect to MetaMask:", err);
    // Update status
    document.getElementById("status1").innerText =
      "Failed to connect to MetaMask";
    document.getElementById("status1").style.color = "red";
  }
}
//berger contract details
const contractAddress = "0x55c1695308DdD522Ce2Cd899C0992A035e684795";
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_nom",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_place",
                "type": "string"
            }
        ],
        "name": "addBerger",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_place",
                "type": "string"
            }
        ],
        "name": "addLOC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id_ber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_variete",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_quantite",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_date_recolte",
                "type": "string"
            }
        ],
        "name": "addLots",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_ID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "date",
                "type": "string"
            }
        ],
        "name": "Envoyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "bergerCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Bergers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id_berger",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "nom",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "localisation",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_cle",
                "type": "uint256"
            }
        ],
        "name": "getBergers",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id_berger",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "nom",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "localisation",
                        "type": "string"
                    }
                ],
                "internalType": "struct SupplyChain.berger",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getLots",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id_lot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id_ber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "variete",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantite",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "date_recolte",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "date_reception",
                        "type": "string"
                    },
                    {
                        "internalType": "enum SupplyChain.STAGE",
                        "name": "stage",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct SupplyChain.lotOlives",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "LOC",
        "outputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "place",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "locCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lotCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "LotOlives",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id_lot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id_ber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "variete",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "quantite",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "date_recolte",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "date_reception",
                "type": "string"
            },
            {
                "internalType": "enum SupplyChain.STAGE",
                "name": "stage",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_ID",
                "type": "uint256"
            }
        ],
        "name": "showStage",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

//Moulin contract details
const McontractAddress = "0x33304A53B8618aBc85A74Db53E14181e410A1e80";
const McontractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "_id_lots_huile",
                "type": "uint256[]"
            },
            {
                "internalType": "string",
                "name": "_emplacement",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_capacite_reelles",
                "type": "uint256"
            },
            {
                "internalType": "enum SupplyChain.CiterneType",
                "name": "_type_citerne",
                "type": "uint8"
            }
        ],
        "name": "addCiterne",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_place",
                "type": "string"
            }
        ],
        "name": "addLHC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id_mlg",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantite_obtenue",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_nombre_citernes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_taux_acide",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_type_huile",
                "type": "string"
            }
        ],
        "name": "addLotHuile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_nom_moulin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_localisation_moulin",
                "type": "string"
            }
        ],
        "name": "addMoulin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "_id_lots_olive",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "_id_moul",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_date_moulinage",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_extraction_type",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_solvant_type",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_quantite_olive",
                "type": "uint256"
            }
        ],
        "name": "addMoulinage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "citerneCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Citernes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id_citerne",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "emplacement",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "capaciteReelle",
                "type": "uint256"
            },
            {
                "internalType": "enum SupplyChain.CiterneType",
                "name": "citerne_type",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_cle",
                "type": "uint256"
            }
        ],
        "name": "getCiterne",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id_citerne",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "id_lots_huile",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "string",
                        "name": "emplacement",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "capaciteReelle",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum SupplyChain.CiterneType",
                        "name": "citerne_type",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct SupplyChain.Citerne",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_cle",
                "type": "uint256"
            }
        ],
        "name": "getLotHuile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id_lot_huile",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id_mlg",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantite_obtenue",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nombre_citernes",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "taux_acide",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "type_huile",
                        "type": "string"
                    }
                ],
                "internalType": "struct SupplyChain.LotHuile",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_cle",
                "type": "uint256"
            }
        ],
        "name": "getMoulinage",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id_moulinage",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "id_lots_olive",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id_moul",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "date_moulinage",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "extraction_type",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "solvant_type",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantite_olive",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SupplyChain.Moulinage",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getMoulins",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id_moulin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "nom_moulin",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "localisation_moulin",
                        "type": "string"
                    }
                ],
                "internalType": "struct SupplyChain.moulin",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "LHC",
        "outputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "place",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lhcCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lotHuileCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "LotsHuile",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id_lot_huile",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id_mlg",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantite_obtenue",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "nombre_citernes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "taux_acide",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "type_huile",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "moulinageCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Moulinages",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id_moulinage",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id_moul",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "date_moulinage",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "extraction_type",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "solvant_type",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "quantite_olive",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "moulinCtr",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Moulins",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id_moulin",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "nom_moulin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "localisation_moulin",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


document.getElementById('btn').addEventListener('click', lotTrack)

async function lotTrack() {

    //contracts
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const Mcontract = new web3.eth.Contract(McontractABI, McontractAddress);

    const id = document.getElementById("citerne_id").value;

    const citerne = await Mcontract.methods.getCiterne(id).call();
    const List_id = citerne.id_lots_huile;

    const List_lot = [];
    var qtt_tot = BigInt(0);

    for (let i = 0; i < List_id.length; i++) {
        List_lot[i] = await Mcontract.methods.getLotHuile(List_id[i]).call();
        qtt_tot += List_lot[i].quantite_obtenue;
    }

    const lot = await Mcontract.methods.getLotHuile(List_id[0]).call();
    const moulinage = await Mcontract.methods.getMoulinage(lot.id_mlg).call();
    const moulin = await Mcontract.methods.getMoulins(moulinage.id_moul).call();
    const List_olive = moulinage.id_lots_olive;
    const olive = await contract.methods.getLots(List_olive[0]).call();
    const berger = await contract.methods.getBergers(olive.id_ber).call();





    const infoJSON = {
        id_citerne: citerne.id_citerne,
        capaciteReelle: citerne.capaciteReelle,
        quantite_totale_huile: qtt_tot.toString(),
        taux_acidite: lot.taux_acide,
        type_huile: lot.type_huile,
        date_moulinage: moulinage.date_moulinage,
        extraction_type: moulinage.extraction_type,
        solvant_type: moulinage.solvant_type,
        moulin: moulin.nom_moulin,
        localisation_moulin: moulin.localisation_moulin,
        variete_olive: olive.variete,
        date_recolte: olive.date_recolte,
        berger: berger.nom,
        localisation: berger.localisation
    };

    // Set the innerText of the element using the JSON object
    document.getElementById('info').innerText = `
    Id citerne: ${infoJSON.id_citerne}
    Capacite Réelle: ${infoJSON.capaciteReelle}
    Quantite totale d'huile: ${infoJSON.quantite_totale_huile}
    Taux d'acidité: ${infoJSON.taux_acidite}
    Type d'huile: ${infoJSON.type_huile}
    Date de moulinage: ${infoJSON.date_moulinage}
    Type d'extraction: ${infoJSON.extraction_type}
    Type de solvant: ${infoJSON.solvant_type}
    Nom du Moulin: ${infoJSON.moulin}
    Localisation du moulin: ${infoJSON.localisation_moulin}
    Variéte d'olives: ${infoJSON.variete_olive}
    Date de récolte: ${infoJSON.date_recolte}
    Nom du berger: ${infoJSON.berger}
    Localisation du berger: ${infoJSON.localisation}

    `;
}