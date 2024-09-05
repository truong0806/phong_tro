module.exports = {
  apps: [
    {
      name: 'phongtro',
      cwd: '/var/www/phongtro/server',
      script: 'npm',
      args: 'run dev',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'travel',
      cwd: '/var/www/travel/server',
      script: 'npm',
      args: 'run dev',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
