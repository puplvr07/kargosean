import logoAsset from "@/assets/KARGO_Logo.png"

export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logoAsset}
      alt="KARGO"
      width={size * 1.8}
      height={size * 1.8}
      style={{
        display: "block",
        borderRadius: size * 0.22,
        boxShadow: "0 4px 14px rgba(25,27,169,0.28)",
        objectFit: "cover",
      }}
    />
  )
}

