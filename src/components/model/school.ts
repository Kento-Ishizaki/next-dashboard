export type School = {
  id: number
  name: string
  email: string
  area: string
}

export const getSchools = () => {
  const areas = [
    'tokyo',
    'cebu',
    'australia',
    'vietnam',
    'canada',
    'france',
    'germany',
    'spain',
    'italy',
    'uk',
    'usa',
  ]

  // Schoolの配列を作成
  const schools: School[] = []
  areas.map((area, index) => {
    schools.push({
      id: index,
      name: `${area} school`,
      email: `${area}@${area}.com`,
      area: area,
    })
  })
  return schools
}
