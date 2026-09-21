import logoAsset from "@/assets/KARGO_Logo.png"

export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <img
        src={logoAsset}
        alt="KARGO"
        width={size * 1.8}
        height={size * 1.8}
        style={{
          display: "block",
          borderRadius: size * 0.22,
          boxShadow: "0 4px 14px rgba(168,77,56,0.28)",
          filter: "hue-rotate(130deg) saturate(0.9)",
          objectFit: "cover",
        }}
      />
    </div>
  )
}

