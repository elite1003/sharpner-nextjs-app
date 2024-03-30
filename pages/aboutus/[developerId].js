import { useRouter } from "next/router";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const DeveloperPage = () => {
  const router = useRouter();
  const developerId = parseInt(router.query.developerId);
  const developer = details.find((detail) => detail.id === developerId);
  return developer ? (
    <h1>
      {developer.name} {developer.role}
    </h1>
  ) : (
    <h1>Developer Does not exist</h1>
  );
};
export default DeveloperPage;
