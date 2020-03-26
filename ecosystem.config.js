module.exports = {
  apps : [
    {
        name: 'Smartcloud Server',
        script: 'lib/index.js',
        cwd: "packages/hub/",
        instances: 1,
        autorestart: true,
        max_memory_restart: '1G',
        wait_ready: true,
        error_file: 'err.log',
        out_file: 'out.log',
        log_file: 'combined.log',
        env: {
          watch: true,
          exp_backoff_restart_delay: 5000,
          DEBUG: "true",
          NODE_ENV: 'development'
        },
        env_production: {
          exp_backoff_restart_delay: 500,
          watch: false,
          DEBUG: "false",
          NODE_ENV: 'production'
        },
        ignore_watch: [
          "node_modules", "logs", "*.log"
        ]
    }
  ],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
