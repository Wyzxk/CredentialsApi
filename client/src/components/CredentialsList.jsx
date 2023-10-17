import { useEffect, useState } from "react";
import { getAllCredentials } from "../api/credentials.api";
import { CredentialCard } from "./CredentialCard";
import MediaCard from "./Card";
export function CredentialsList() {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    async function chargeCredentials() {
      const rest = await getAllCredentials();
      setCredentials(rest.data);
    }
    chargeCredentials();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {credentials.map((credential, index) => (
        <CredentialCard key={index} credential={credential} />
      ))}
    </div>
  );
}
