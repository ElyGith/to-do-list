import { Button } from "@/components/ui/button";

// ajouter un paramètre pour le lien de redirection ou bien l'appel de l'API à voir
export const ButtonListe = () => {
    return (
        <div className="flex flex-col">
            <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Button 1
            </Button>
            <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Button 2
            </Button>
            <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Button 3
            </Button>
        </div>
    );
}