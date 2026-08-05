const LAMBDA_URL =
  "https://3hkns665y7.execute-api.ap-southeast-2.amazonaws.com/default/lamda1";

export async function getLambdaStatus() {
  const response = await fetch(LAMBDA_URL);

  if (!response.ok) {
    throw new Error("Failed to call Lambda");
  }

  return await response.json();
}
