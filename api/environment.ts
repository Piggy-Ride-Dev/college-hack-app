export type Environment = 'development' | 'production';

const  environments: Record<string, Environment> = {
  localhost: 'development',
  'develop.url.dev': 'development',
  'production.url': 'production',
}

const apiUrls: Record<Environment, string> = {
  development: 'https://college-hack-api.azurewebsites.net',
  production: 'production.url',
}

export function environment(env: Environment): boolean {
  const { hostname } = window.location;

  return environments[hostname] === env;
}

export function getEnvironment(): Environment {
  let hostname;

  if (typeof window !== 'undefined') {
    hostname = window.location.hostname;
    return environments[hostname];
  }
  
  return 'development';
}

export function getApiURL() {
    return apiUrls[getEnvironment()];
}