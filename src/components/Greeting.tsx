interface GreetingProps {
    firstName: string,
    lastName: string,
}

export default function Greeting({ firstName, lastName }: GreetingProps) {
    return( 
        <p>Welcome {firstName} {lastName}.</p>
    )
}