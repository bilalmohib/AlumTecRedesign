export type BlogSearchHeaderProps = {
    placeholder: string,
    className?: string,
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClear?: () => void
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onFilter?: () => void
    onFilterClear?: () => void
    onFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    filterValue?: string
    filterPlaceholder?: string
    filterOptions?: string[]
    filterOptionsValue?: string[]
    filterOptionsOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    filterOptionsOnClear?: () => void
    filterOptionsOnKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    filterOptionsOnFilter?: () => void
    filterOptionsOnFilterClear?: () => void
    filterOptionsOnFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    filterOptionsFilterValue?: string
    filterOptionsFilterPlaceholder?: string
    filterOptionsFilterOptions?: string[]
    filterOptionsFilterOptionsValue?: string[]
    filterOptionsFilterOptionsOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}