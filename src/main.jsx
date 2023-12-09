import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  scrollSepolia,
  scrollTestnet,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = "1207867309004712866762058872244027119078920421376";

const { chains, publicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    scrollSepolia,
    scrollTestnet,
  ],
  [
    alchemyProvider({ apiKey: "MvnDPw66eHH7naTo9p7mdl8gu_sm61bj" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <AnonAadhaarProvider _appId={app_id}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AnonAadhaarProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
