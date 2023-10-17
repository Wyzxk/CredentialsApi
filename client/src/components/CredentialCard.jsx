import MediaCard from "./Card";

export function CredentialCard({ credential }) {
  return (
    <div>
      <MediaCard
        name1={credential.name}
        lastname1={credential.lastname}
        degree1={credential.degree}
        id1={credential.id}
      />
    </div>
  );
}
