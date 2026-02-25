import { useToast } from '@/stores/toast';
import { useForm } from '@inertiajs/vue3';
import { login_post } from '@routes/account/account';
export const useAuth = () => {
    let data = useForm<{
        email: string;
        password: string;
        remember_me: boolean;
    }>({
        email: '',
        password: '',
        remember_me: false,
    });

    const submit = () => {
        let toast = useToast();
        data.submit(login_post(), {
            onFinish: () => {
                toast.addToast('Success', 'Logged in successfully', 'warning');
            },
        });
    };
    return { data, submit };
};
