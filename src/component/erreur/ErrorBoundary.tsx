/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Met à jour l'état pour afficher l'UI de secours lors du prochain rendu
        return { hasError: true, error, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Vous pouvez également loguer l'erreur à un service d'erreur externe ici
        this.setState({ error, errorInfo });
    }

    handleRetry = () => {
        // Recharge la page ou réinitialise l'état de l'application
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            // Vous pouvez rendre n'importe quel UI personnalisé pour les erreurs ici
            return (
                <div className={styles.errorBoundary}>
                    <div>
                        <h1 className={styles.errorTitle}>{"Quelque chose s'est mal passé."}</h1>
                        <p className={styles.errorMessage}>{this.state.error && this.state.error.toString()}</p>
                        <button className={styles.errorButton} onClick={this.handleRetry}>
                            Réessayer
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
