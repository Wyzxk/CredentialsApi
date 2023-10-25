import MediaCard from "./Card";

export function CredentialCard({ credential }) {
  // Send API credential objects to Card component
  return (
    <div>
      <MediaCard
        nameCredential={credential.name}
        lastnameCredential={credential.lastname}
        degreeCredential={credential.degree}
        idCredential={credential.id}
        imageCredential={credential.image}
        bloodCredential={credential.blood}
        codeCredential={credential.code}
        mailCredential={credential.mail}
        phoneCredential={credential.phone}
      />
    </div>
  );
}
