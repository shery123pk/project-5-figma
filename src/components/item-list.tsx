"use client"

import { useState } from "react"
import { Search, Plus } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Item {
  id: number
  name: string
  checked: boolean
}

const initialItems: Item[] = [
  { id: 1, name: "Apple", checked: false },
  { id: 2, name: "Banana", checked: false },
  { id: 3, name: "Cherry", checked: false },
  { id: 4, name: "Date", checked: false },
  { id: 5, name: "Elderberry", checked: false },
]

export default function ItemList() {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCheckboxChange = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Items</h2>
        <div className="flex items-center mb-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button className="ml-2 bg-blue-500 hover:bg-blue-600" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <ul className="space-y-2">
          {filteredItems.map((item) => (
            <li key={item.id} className="flex items-center">
              <Checkbox
                id={`item-${item.id}`}
                checked={item.checked}
                onCheckedChange={() => handleCheckboxChange(item.id)}
                className="mr-2"
              />
              <label
                htmlFor={`item-${item.id}`}
                className={`flex-grow ${
                  item.checked ? "line-through text-gray-400" : "text-gray-700"
                }`}
              >
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 px-6 py-3">
        <p className="text-sm text-gray-500">
          {items.filter((item) => item.checked).length} of {items.length} items selected
        </p>
      </div>
    </div>
  )
}

