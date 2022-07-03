const { Client } = require("cassandra-driver");

async function run() {
  const client = new Client({
    cloud: { secureConnectBundle: "secure-connect-Calmify.zip" },
    credentials: {
      username: "KrfDDfnUkGaOfXFzwMPTyaeG",
      password:
        "i63WsyWY6Hvvgbum4OT8nTvDi-IvFdQnQ2an3mW+pir+0z5,orok6Qjfc9acSCzLdRvZHZPmSCkDD9,u.qaHkyR2O2QzJGiNCfiR+g053Jwc,NvWGF7Zbe9A53hcpbOQ",
    },
  });

  await client.connect();

  // Execute a query
  const rs = await client.execute("SELECT * FROM calm.meditations");
  console.log(rs.rows);
  console.log(`Hello from cluster: ${rs.first()["cluster_name"]}`);
  await client.shutdown();
}

// Run the async function
run();
