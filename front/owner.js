
// Initialize Web3
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

// Function to connect to MetaMask
async function connectToMetaMask() {
  const metaMaskAvailable = await checkMetaMaskAvailability();
  if (metaMaskAvailable) {
    try {
      // Request access to MetaMask accounts
      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected to MetaMask!");
      // Update status
      document.getElementById("status1").innerText = "Connected to MetaMask";
      document.getElementById("status1").style.color = "green";
    } catch (err) {
      // Handle error
      console.error("Failed to connect to MetaMask:", err);
      // Update status
      document.getElementById("status1").innerText = "Failed to connect to MetaMask";
      document.getElementById("status1").style.color = "red";
    }
  }
}

document.getElementById("metamask").addEventListener("click", connectToMetaMask);

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

    async function addLotOliveCreator() {
        const locNom = document.getElementById("locNom").value;
        const locPlace = document.getElementById("locPlace").value;
        const locAddresse = document.getElementById("locAddresse").value;

        try {
            const accounts = await web3.eth.getAccounts();
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            await contract.methods.addLOC(locAddresse, locNom, locPlace).send({ from: accounts[0] });

            console.log("Lot Olive Creator added successfully!");
        } catch (error) {
            console.error("Error adding Lot Olive Creator:", error);
        }
    }

    
    const McontractAddress="0x33304A53B8618aBc85A74Db53E14181e410A1e80";
    const McontractABI= [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
      },
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
      }
    ];

    // Function to add Moulinage Creator
    async function addLotHuileCreator() {
        const lhuileNom = document.getElementById("lhuileNom").value;
        const lhuilePlace = document.getElementById("lhuilePlace").value;
        const lhuileAddresse = document.getElementById("lhuileAddresse").value;

        try {
            const accounts = await web3.eth.getAccounts();
            const Mcontract = new web3.eth.Contract(McontractABI, McontractAddress);

            await Mcontract.methods.addLHC(lhuileAddresse,lhuileNom, lhuilePlace).send({ from: accounts[0] });

            console.log("LotHuile Creator added successfully!");
        } catch (error) {
            console.error("Error adding LotHuile Creator:", error);
        }
    }

    // Add event listeners
    document.getElementById("addLOCButton").addEventListener("click", addLotOliveCreator);
    document.getElementById("addLHButton").addEventListener("click", addLotHuileCreator);
