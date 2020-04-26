// Simulates server calls

export const login = (user) => {
  const response = {
    token: '1a2b3c4d',
    data: {
      username : user.username,
      password : user.password
    }
  };
  return new Promise(resolve => setTimeout(resolve(response), 1000));
};

export const logout = () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
};
