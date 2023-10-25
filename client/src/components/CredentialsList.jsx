import { useEffect, useState } from "react";
import { getAllCredentials } from "../api/credentials.api";
import { CredentialCard } from "./CredentialCard";

// Component that iterates over API credentials objects
export function CredentialsList() {
  // That state contain API credentials objects
  const [credentials, setCredentials] = useState([]);
  // UseEffect for obtain API credentials objects
  useEffect(() => {
    async function chargeCredentials() {
      const response = await getAllCredentials();
      setCredentials(response.data);
    }
    chargeCredentials();
  }, []);

  return (
    <>
      {credentials[0] ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {credentials.map((credential, index) => (
            <CredentialCard key={index} credential={credential} />
          ))}
        </div>
      ) : (
        <h1 className="text-center mt-20 text-2xl">
          Aún no hay credentiales creadas
        </h1>
      )}
    </>
  );
}
