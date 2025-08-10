import os from "os";
import open from "open";

export default async function openBrowser({
  port = 3000,
  https,
}: Partial<{
  port: number;
  https: boolean;
}> = {}) {
  if (process.env.NODE_ENV !== "development" || typeof open !== "function") return;

  const PORT = port || 3000;
  const protocol = https ? "https" : "http";
  const localhost = `${protocol}://localhost:${PORT}`;
  const network = `${protocol}://${getLocalNetwork()}:${PORT}`;

  console.log(`
      - Local: ${localhost}
      - Network: ${network}
    `);

  await open(localhost);
}

function getLocalNetwork() {
  const interfaces = os.networkInterfaces() || {};
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === "IPv4" && !iface.internal) return iface.address;
    }
  }
  return "0.0.0.0";
}
