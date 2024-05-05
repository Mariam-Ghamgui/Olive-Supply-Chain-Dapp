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

// Contract Details for Moulins
const contractAddress = "0x33304A53B8618aBc85A74Db53E14181e410A1e80"; // Remplacez par l'adresse du contrat des moulins
const contractABI = [
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

document.getElementById("moulinbtn").addEventListener("click", async () => {
  await AjouterMoulin();
});

async function AjouterMoulin() {
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const NomMoulin = document.getElementById("NomMoulin").value;
  const localMoulin = document.getElementById("localMoulin").value;

  if (!NomMoulin || !localMoulin) {
    console.error("Nom et localisation requis");
    return;
  }

  const accounts = await web3.eth.getAccounts();
  const acc = accounts[0];

  try {
    await contract.methods.addMoulin(NomMoulin, localMoulin).send({ from: acc });
    document.getElementById("ajout").innerText = "Ajouté avec succès";
  } catch (err) {
    console.log("Échec de l'ajout du moulin", err);
    document.getElementById("ajout").innerText = "Erreur d'ajout";
  }
}

let detailsDisplayed = false;

document.getElementById("getmoulin").addEventListener("click", async () => {
  if (!detailsDisplayed) {
    clearPreviousResults();
    await displayMoulins();
    detailsDisplayed = true;
  } else {
    console.log('Les détails sont déjà affichés');
  }
});

async function displayMoulins() {
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const moulinCtr = await contract.methods.moulinCtr().call();
  const moulinsContainer = document.getElementById("moulins");

  for (let i = 1; i <= moulinCtr; i++) {
    const moulin = await contract.methods.getMoulins(i).call();

    const moulinInfo = document.createElement("tr");
    moulinInfo.innerHTML = `
      <th scope="row">${moulin.id_moulin}</th>
      <td>${moulin.nom_moulin}</td>
      <td>${moulin.localisation_moulin}</td>
    `;
    moulinsContainer.appendChild(moulinInfo);
  }
}

function clearPreviousResults() {
  const moulinsContainer = document.getElementById("moulins");
  moulinsContainer.innerHTML = '';
  detailsDisplayed = false;
}
