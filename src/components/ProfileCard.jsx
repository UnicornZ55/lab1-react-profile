function ProfileCard({ name, role, bio }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;