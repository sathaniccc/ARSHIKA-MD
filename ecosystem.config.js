module.exports = {
  apps: [
    {
      name: "arshika-md",
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "700M",
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "info"
      }
    }
  ]
};
