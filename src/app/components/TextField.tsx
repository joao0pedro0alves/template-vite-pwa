interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function TextField(props: TextFieldProps) {
    return (
        <input 
            {...props}
            className='p-3 rounded-sm bg-gray-200 focus:outline-none focus:ring focus:ring-emerald-500/80'
        />
    )
}