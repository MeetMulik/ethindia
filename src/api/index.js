import reportAbi from "../utils/reportAbi.json";
import { reportAddress } from "../utils/index.js";
import { ethers } from "ethers";

// export const connecWithContract = async (signerOrProvider) => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract("0xC6CBcd238d5c3b9B039bF9A2F75F67e0E3499D78", reportAbi, signer);
//     return contract;
// };

export const connectWallet = async () => {
    // using rainbowkit
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    return address;
}

export const fetchReportContract = async (signerOrProvider) => {
    return new ethers.Contract(
        reportAddress,
        reportAbi,
        signerOrProvider
    );
};

export const connectWithReportContract = async (signerOrProvider) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = fetchReportContract(signer);
    return contract;
}