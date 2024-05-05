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

//Function to connect to MetaMask
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
  // Contract Details
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
  document.getElementById("lotbtn").addEventListener("click", async() =>{
	await Ajouterlot();
  })

  async function Ajouterlot() {

	const contract = new web3.eth.Contract(contractABI, contractAddress);
    const id_berger = document.getElementById("id-bg").value;
    const variete = document.getElementById("variete").value;
	const quantite = document.getElementById("quantite").value;
    const dateRec = document.getElementById("dateRec").value;


	const accounts = await web3.eth.getAccounts();
    const acc = accounts[0];

	try{
		contract.methods.addLots(id_berger,variete,quantite,dateRec).send({from:acc});
		document.getElementById("ajoutLots").innerText= "Ajouté avec succès";
		} catch(err){
			console.log("fail to add lots",err);
			document.getElementById("ajoutLots").innerText= "Erreur d'ajout";
		}

  }

  let detailsDisplayed = false;

  document.getElementById("getlots").addEventListener("click", async() =>{
	if (!detailsDisplayed) {
      
		clearPreviousResults();
        await displayLots();

        // Set the flag to true
        detailsDisplayed = true;
    } else {
        // Details already displayed, show a message or return
        console.log('Details already displayed');
    }
});


	async function displayLots() {
		const contract = new web3.eth.Contract(contractABI, contractAddress);
		const lotCtr = await contract.methods.lotCtr().call();
	
		const lotsContainer = document.getElementById("lots");
	
		for (let i = 1; i <= lotCtr; i++) {
			const lot = await contract.methods.getLots(i).call();
			const stage = await contract.methods.showStage(i).call();
			
	
			const lotInfo = document.createElement("tr");
			lotInfo.innerHTML = `
				<th scope="row"> ${lot.id_lot}</th>
				<td> ${lot.variete}</td>
				<td> ${lot.quantite}</td>
				<td> ${lot.id_ber}</td>
				<td> ${lot.date_recolte}</td>
				<td> ${stage}</td>
				<td>${lot.date_reception}</td>
				
				
			`;
			lotsContainer.appendChild(lotInfo);
		}
	}

	function clearPreviousResults() {
		const lotsContainer = document.getElementById("lots");
		lotsContainer.innerHTML = '';
    detailsDisplayed = false;

	}

document.getElementById("envbtn").addEventListener('click',async() =>{
	await modifier();
})

async function modifier(){

	const contract = new web3.eth.Contract(contractABI, contractAddress);
    
	const lot_id = document.getElementById("cle").value;
    const rec_date = document.getElementById("rec_date").value;


	const accounts = await web3.eth.getAccounts();
    const acc = accounts[0];

	try{
		contract.methods.Envoyer(lot_id,rec_date).send({from:acc});
		document.getElementById("modifLots").innerText= "Modifié avec succès";

		} catch(err){
			console.log("fail to update lots",err);
			document.getElementById("modifLots").innerText= "Erreur";
		}

}