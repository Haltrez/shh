/**
 * VPN referral partner.
 * Paste the tracking link into `affiliateUrl` and the provider's name into `name`.
 * Until then, the VPN box shows the advice without a button.
 * Outbound clicks go through /go/vpn (logged like casino clicks).
 */
export const vpn = {
  name: "",
  affiliateUrl: "",
  /** Optional one-liner about the provider, e.g. "Audited no-logs, accepts crypto". Only verified claims. */
  blurb: "",
};

export const hasVpnPartner = () => Boolean(vpn.name && vpn.affiliateUrl);
