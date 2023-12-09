'use client'
import { School } from '@/components/model/school'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<School>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: '名前',
  },
  {
    accessorKey: 'email',
    header: 'メールアドレス',
  },
  {
    accessorKey: 'area',
    header: 'エリア',
  },
]
