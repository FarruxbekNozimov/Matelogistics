module.exports = {
  apps: [
    {
      name: 'matelogisticss.com',  // Replace with your application name
      script: './.output/server/index.mjs',  // Specify the Node.js interpreter path
      interpreter: '/root/.nvm/versions/node/v18.19.1/bin/node', // Specify the path to Node.js version 18.x
      exec_mode: "cluster",
      instances: "max",  // Set the number of instances as needed
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',  // Adjust based on your application's memory requirements
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
