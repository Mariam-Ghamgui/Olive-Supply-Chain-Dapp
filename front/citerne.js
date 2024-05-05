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
    await connectWallet();
  } else {
    // MetaMask not available
    console.error("MetaMask not found");
  }
});

// Function to connect to MetaMask
async function connectWallet() {
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

// Contract Details for Citerne
const contractAddress = "0x33304A53B8618aBc85A74Db53E14181e410A1e80"; // Replace with your Citerne smart contract address
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

document.getElementById("citerneBtn").addEventListener("click", async () => {
  await ajouterCiterne();
});

async function ajouterCiterne() {
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  const ID_huile = document.getElementById("id_huiles").value;
  const emplacement = document.getElementById("emplacement").value;
  const capaciteReelle = document.getElementById("capaciteReelle").value;
  const citerneType = document.getElementById("citerneType").value;

  if (!emplacement || !capaciteReelle || !citerneType) {
    console.error("All fields are required");
    return;
  }

  const myArr = String(ID_huile).split(",").map((ID_huile)=>{
    return Number(ID_huile);
  })

  const accounts = await web3.eth.getAccounts();
  const acc = accounts[0];

  try {
    await contract.methods
      .addCiterne(
        myArr,
        emplacement,
        capaciteReelle,
        citerneType
      )
      .send({ from: acc });
    document.getElementById("ajoutCiterne").innerText = "Successfully added";
  } catch (err) {
    console.log("Failed to add citerne", err);
    document.getElementById("ajoutCiterne").innerText = "Error adding citerne";
  }
}

let detailsDisplayed = false;

document.getElementById("getCiternes").addEventListener("click", async () => {
  if (!detailsDisplayed) {
    clearPreviousResults();
    await displayCiternes();
    detailsDisplayed = true;
  } else {
    console.log('Details are already displayed');
  }
});

async function displayCiternes() {
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const citerneCtr = await contract.methods.citerneCtr().call();
  const citerneContainer = document.getElementById("cisternes");

  for (let i = 1; i <= citerneCtr; i++) {
    const citerne = await contract.methods.getCiterne(i).call();

    const citerneInfo = document.createElement("tr");
    citerneInfo.innerHTML = `
      <th scope="row">${citerne.id_citerne}</th>
      <td>${citerne.emplacement}</td>
      <td>${citerne.capaciteReelle}</td>
      <td>${citerne.citerne_type}</td>
      <td>${citerne.id_lots_huile}</td>

    `;
    citerneContainer.appendChild(citerneInfo);
  }
}


function clearPreviousResults() {
const citerneContainer = document.getElementById("cisternes");
citerneContainer.innerHTML = '';
detailsDisplayed = false;
}
  

