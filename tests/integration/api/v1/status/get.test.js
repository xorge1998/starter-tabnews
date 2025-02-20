test("GET to /api/v1/status should returns 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString(); 
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.8");
  //expect(["16.0","16.1", "16.4","16.8"]).toContain(responseBody.dependencies.database.version);
  expect(responseBody.dependencies.database.maxConnections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);

});