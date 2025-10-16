import { ProductCard } from "@/components/ProductCard"
import { API_URL } from "@/const"
import type { IProduct } from "@/shared/types/product_card.interface"

export default async function ShopISRPage() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 300
    }
  })
  const products = (await response.json()) as IProduct[]

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map(p => <ProductCard key={p.id} {...p} />)}
    </div>
  )
}