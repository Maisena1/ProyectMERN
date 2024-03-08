export const registerFetch = async (data) => {
  try {
    const url = "http://localhost:3977/api/v1/auth/register";
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    if (response.status !== 200) throw result;
    return result;
  } catch (error) {
    throw error;
  }
};
