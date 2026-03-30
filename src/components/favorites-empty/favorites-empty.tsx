function FavoritesEmpty(): JSX.Element {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <p style={{ fontSize: '24px', color: '#666' }}>Nothing yet saved.</p>
      <p style={{ fontSize: '18px', color: '#999' }}>Save properties to narrow down search or plan your future trips.</p>
    </div>
  );
}

export default FavoritesEmpty;
