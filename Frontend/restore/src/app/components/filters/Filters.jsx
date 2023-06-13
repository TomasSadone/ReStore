import React, { useEffect, useState } from 'react';

export default function Filters({ product }) {
  const [filters, setFilters] = useState([]);
  const filtros = [
    {
      name: 'tecnologia',
      subcategorias: [
        {
          name: 'notebook',
          filters: [
            { name: 'capacity', values: ['128gb', '256gb', '512gb'] },
            { name: 'colors', values: ['red', 'blue'] },
          ],
        },
      ],
    },
  ];
  useEffect(() => {
    //get filters from back end on component mount
    // setFilters(categories.subcategorias[product.subcategoria]); //setear con los filtros
    //para desarrollo:
    console.log(filtros.subcategorias);
    setFilters(filtros[0].subcategorias[0].filters);
  }, []);
  const handleFiltersChange = () => {
    //logica de filtrado
  };

  return (
    <aside>
      {filters.map((filtro) => (
        <div key={filtro.name}>
          <span>{filtro.name}</span>
          {console.log(filtro)}
          {filtro.values.map((f) => (
            <button onClick={handleFiltersChange} key={f}>
              {f}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
