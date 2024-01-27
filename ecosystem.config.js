module.exports = {
  apps: [
    {
      name: 'matelogisticss.com',  // Replace with your application name
      script: 'yarn',
      args: 'start',
      node_args: '--experimental-specifier-resolution=node',
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

