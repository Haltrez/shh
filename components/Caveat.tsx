export function Caveat({ text }: { text: string }) {
  const m = text.match(/^([^:]{2,30}):\s*(.*)$/s);
  return (
    <aside className="caveat" role="note">
      {m ? (
        <>
          <strong>{m[1]}:</strong> {m[2]}
        </>
      ) : (
        text
      )}
    </aside>
  );
}

export const VPN_NOTICE =
  "VPN notice: A VPN protects your privacy online, but it doesn't change where you're allowed to gamble. Most casinos' terms forbid using a VPN to access them from a restricted country, and they can close the account and keep the winnings if they detect it. Only play where online gambling is legal for you.";
