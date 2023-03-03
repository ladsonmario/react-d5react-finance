export const convertRealFormat = (value: number) => {
    return Intl.NumberFormat(
        'pt-br', 
        { style: 'currency', currency: 'BRL' }
    ).format(value);     
}

export const addZeroInHora = (n: number) => n > 9 ? n : '0'+n;