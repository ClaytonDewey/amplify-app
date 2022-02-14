import React from "react";
import { Authenticator, Button } from "@aws-amplify/ui-react";

export default function App() {
    return (
        <Authenticator variation="modal">
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <Button onClick={signOut}>Sign out</Button>
                </main>
            )}
        </Authenticator>
    );
}
