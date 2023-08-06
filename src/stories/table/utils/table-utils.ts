export function getDefaultSorting(defaultTableData: any, columns: any) {
    const sorted = [...defaultTableData].sort((a, b) => {
     const filterColumn = columns.filter((column: any) => column.sortbyOrder);
   
     // Merge all array objects into single object and extract accessor and sortbyOrder keys
     let { accessor = "operator", sortbyOrder = "asc" } = Object.assign(
      {},
      ...filterColumn
     );
   
     if (a[accessor] === null) return 1;
     if (b[accessor] === null) return -1;
     if (a[accessor] === null && b[accessor] === null) return 0;
   
     const ascending = a[accessor]
      .toString()
      .localeCompare(b[accessor].toString(), "en", {
       numeric: true,
      });
   
     return sortbyOrder === "asc" ? ascending : -ascending;
    });
    return sorted;
   }