import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router";
import Auth from "~/services/Auth";
import {Alert, AlertDescription} from "~/components/ui/alert";
import {AlertCircleIcon} from "lucide-react";
import { toast } from "sonner"


const registerSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
}).refine((data: { password: any; confirmPassword: any }) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
})
type RegisterForm = z.infer<typeof registerSchema>

const RegisterPage = () => {
    const navigate = useNavigate();
    const form = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form

    const onSubmit = async (d: any) => {
        try{
            const {data, error} = await Auth.signUp(d);
            if (error) {
                console.error("Erro ao entrar:", error.message);
                toast("Erro ao realizar login")
                return;
            }
            navigate("/login");
        } catch (err){
            toast("Erro ao entrar:", err);
        }
        navigate("/login");
    }

    // @ts-ignore
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardContent className="py-8 space-y-6">
                    <h2 className="text-2xl font-semibold text-center">
                        Crie sua conta
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" type="email" {...register("email")} />
                            {errors.email &&
                                <Alert variant="destructive">
                                    <AlertCircleIcon/>
                                    <AlertDescription>
                                        <p>{errors.email.message as string}</p>
                                    </AlertDescription>
                                </Alert>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" {...register("password")} />
                            {errors.password &&
                                <Alert variant="destructive">
                                    <AlertCircleIcon/>
                                    <AlertDescription>
                                        <p>{errors.password.message as string}</p>
                                    </AlertDescription>
                                </Alert>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                            <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
                            {errors.confirmPassword &&
                                <Alert variant="destructive">
                                    <AlertCircleIcon/>
                                    <AlertDescription>
                                    <p>{errors.confirmPassword.message as string}</p>
                                </AlertDescription>
                            </Alert>}
                        </div>

                        <Button type="submit" className="w-full">
                            Registrar
                        </Button>
                    </form>
                    <p className="text-center text-sm text-muted-foreground">
                        Já tem conta?
                        <button className="underline text-primary" onClick={() => navigate("/login")}>
                            Entrar
                        </button>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
};

export default RegisterPage;
