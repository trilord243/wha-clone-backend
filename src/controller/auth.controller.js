export const register = async (req, res, next) => {
  try {
    res.send(req.body);
  } catch (error) {
    next(error);
  }
};

export const login = async (next, req, res) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const logout = async (next, req, res) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (next, req, res) => {
  try {
  } catch (error) {
    next(error);
  }
};
