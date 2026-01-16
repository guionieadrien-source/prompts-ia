const db = [
  [
    "@ANALYSE",
    "Situation complexe, Systémique, Acteurs, Dynamiques",
    "Agis en tant que travailleur social expert. Analyse la situation suivante : [description]. Identifie les enjeux systémiques, les acteurs en présence, les dynamiques de pouvoir et les points de blocage.",
    "analyse",
    "enfance"
  ],
  [
    "@HYPOTHESES",
    "Hypothèses, Biais, Analyse multicausale",
    "À partir de ces éléments observés [liste], formule 3 hypothèses explicatives différentes sur les dynamiques à l'œuvre. Identifie également mes biais potentiels de confirmation.",
    "analyse",
    "*"
  ],
  [
    "@RESSOURCES",
    "Facteurs protection, Forces, Leviers",
    "Identifie dans cette situation [description] : les ressources mobilisables (formelles et informelles), les facteurs de protection, les compétences de l'usager et les leviers de changement.",
    "analyse",
    "enfance"
  ],
  [
    "@BESOINS-MASLOW",
    "Besoins fondamentaux, Hiérarchie, Priorisation",
    "Analyse cette situation sous l'angle des besoins fondamentaux (Maslow) : quels besoins sont satisfaits, partiellement couverts ou en danger ? Priorise les interventions.",
    "analyse",
    "*"
  ],
  [
    "@IMPACT-CROISE",
    "Interactions, Cercles vicieux, Multicausalité",
    "Réalise une analyse croisée : quels sont les impacts de [problématique A] sur [problématique B] ? Comment ces difficultés s'alimentent-elles mutuellement ? Identifie les cercles vicieux.",
    "analyse",
    "*"
  ],
  [
    "@POSTURE",
    "Supervision, Recul réflexif, Transfert, Contre-transfert",
    "J'ai vécu la situation difficile suivante : [description]. Aide-moi à prendre du recul sur ma pratique : identifie les angles morts potentiels, les transferts émotionnels et mes biais de jugement.",
    "analyse",
    "enfance"
  ],
  [
    "@TRANSFERT",
    "Transfert, Contre-transfert, Réactions émotionnelles",
    "J'ai tendance à réagir [émotion/comportement] face à [type de situation]. Analyse les transferts/contre-transferts possibles et suggère un ajustement de ma posture professionnelle.",
    "analyse",
    "agees"
  ],
  [
    "@DEBRIEFING",
    "Débriefing, Apprentissage, Amélioration continue",
    "Je sors d'un entretien où [événement difficile]. Aide-moi à débriefer : points positifs, points d'amélioration, apprentissages à retenir, besoin de soutien collectif ?",
    "analyse",
    "*"
  ],
  [
    "@LIMITES",
    "Refus, Cadre professionnel, Déontologie, Frontières",
    "Comment formuler un refus professionnel à cette demande [demande] qui dépasse mon cadre de compétences ou les missions du service, tout en expliquant les raisons de manière pédagogique ?",
    "analyse",
    "*"
  ],
  [
    "@ETHIQUE-DILEMME",
    "Éthique, Dilemme, Valeurs, Arbitrage",
    "Je suis confronté à ce dilemme éthique : [situation]. Analyse les enjeux de valeurs en tension (autonomie vs protection, confidentialité vs signalement). Propose des pistes de résolution.",
    "analyse",
    "*"
  ],
  [
    "@LOYAUTE",
    "Tension loyauté, Institution, Usager, Positionnement",
    "Je me sens en tension de loyauté entre les attentes de l'institution et les besoins de l'usager dans ce contexte : [description]. Comment arbitrer de manière éthique ?",
    "analyse",
    "enfance"
  ],
  [
    "@SECRET-PRO",
    "Secret professionnel, Partage information, Déontologie",
    "Dans cette situation [description], quelles informations puis-je légalement partager avec [partenaire] ? Rappelle le cadre du secret professionnel partagé et ses exceptions.",
    "analyse",
    "enfance"
  ],
  [
    "@DISCRIMINATIONS",
    "Discriminations, Biais culturels, Intersectionnalité",
    "Analyse cette situation sous l'angle des discriminations potentielles (origine, genre, handicap, précarité). Identifie mes biais culturels et propose une approche non-discriminante.",
    "analyse",
    "handicap,precarite"
  ],
  [
    "@EMPOWERMENT",
    "Pouvoir d'agir, Autonomie, Participation, Capacitation",
    "Comment renforcer le pouvoir d'agir de l'usager dans cette situation [description] ? Identifie les espaces de choix possibles et les leviers de participation.",
    "analyse",
    "enfance,agees"
  ],
  [
    "@ANGLES-MORTS",
    "Supervision, Points aveugles, Auto-critique",
    "Je me sens bloqué avec cet usager [situation]. Quels angles morts dans ma posture professionnelle pourraient expliquer cette impasse ? Propose un changement de perspective.",
    "analyse",
    "*"
  ],
  [
    "@IP-CORRECTION",
    "Protection enfance, IP, Correction, Style, Neutralité",
    "Agis en tant qu'expert en rédaction médico-sociale, spécialisé dans la protection de l'enfance. Reprends ce projet d'écrit [texte] : corrige l'orthographe et la syntaxe en respectant mon style. Assure-toi que le ton reste factuel, neutre et conforme au cadre légal.",
    "rapport",
    "enfance"
  ],
  [
    "@RAPPORT",
    "Rapport social, Structure, Analyse, Préconisations",
    "Rédige une trame de rapport social structurée comprenant le contexte, les éléments factuels, une analyse approfondie de la situation et des préconisations claires concernant : [sujet]. Ton neutre et respectueux.",
    "rapport",
    "*"
  ],
  [
    "@NOTE-JUGE",
    "Justice, Synthèse judiciaire, Juge enfants, Argumentation",
    "Transforme ce rapport en note de synthèse pour le juge (2 pages max) : faits chronologiques essentiels, évaluation du danger, préconisations argumentées juridiquement.",
    "rapport",
    "enfance"
  ],
  [
    "@SYNTAXE",
    "Correction, Orthographe, Objectivité, Factuel",
    "Reprends cet écrit professionnel [texte] : corrige l'orthographe, améliore la syntaxe et assure-toi que les propos sont objectifs, factuels et dénués de jugements de valeur.",
    "rapport",
    "*"
  ],
  [
    "@COMPTE-RENDU",
    "Entretien, Traçabilité, Décisions, Échéances",
    "À partir des notes brutes suivantes [notes], rédige un compte-rendu d'entretien fidèle et structuré (points abordés, décisions prises, échéances).",
    "rapport",
    "*"
  ],
  [
    "@COURRIER-OFF",
    "Courrier officiel, Institution, Administratif, Formalisme",
    "Rédige un courrier officiel à [institution] concernant [objet]. Respecte les codes (références, formules), reste factuel et concis. Inclus les pièces justificatives nécessaires.",
    "mail",
    "*"
  ],
  [
    "@MAIL-PRO",
    "Courriel professionnel, Relance, Demande",
    "Rédige un courriel professionnel à [destinataire] pour [objet : demande d'information, relance dossier, coordination]. Ton courtois, structure claire, action attendue précise.",
    "mail",
    "*"
  ],
  [
    "@OBJECTIFS-SMART",
    "Projet personnalisé, Objectifs, SMART, Évaluation",
    "Aide-moi à rédiger un projet personnalisé pour [nom] avec des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels), les moyens et les critères d'évaluation.",
    "rapport",
    "*"
  ],
  [
    "@ARGUMENTAIRE",
    "Plaidoyer, Argumentation, Défense position",
    "Construis un argumentaire solide pour défendre [position : maintien mesure, orientation, moyens supplémentaires]. Appuie-toi sur le cadre légal, les faits observés et l'intérêt supérieur de l'usager.",
    "rapport",
    "*"
  ],
  [
    "@BILAN-MESURE",
    "Bilan, Fin mesure, Évaluation, Résultats",
    "Rédige un bilan d'intervention en fin de mesure pour [usager] : objectifs initiaux, actions menées, résultats obtenus (qualitatifs et quantitatifs), évolution de la situation, préconisations pour la suite.",
    "rapport",
    "*"
  ],
  [
    "@FICHE-LIAISON",
    "Transmission, Relais, Continuité, Synthèse",
    "Crée une fiche de liaison pour transmettre ce dossier à [collègue/partenaire] : historique condensé (10 lignes max), état actuel, actions en cours, points de vigilance prioritaires.",
    "rapport",
    "*"
  ],
  [
    "@SIGNALEMENT-IP",
    "IP, Signalement, Protection enfance, Faits objectifs",
    "Aide-moi à rédiger une Information Préoccupante concernant [situation]. Structure : faits objectifs datés, paroles rapportées de l'enfant, évaluation du danger/risque, mesures déjà tentées, préconisations.",
    "rapport",
    "enfance"
  ],
  [
    "@AVIS-TECHNIQUE",
    "Expertise, Avis technique, Évaluation spécialisée",
    "Rédige un avis technique sur cette situation [description] destiné à [instance : MDPH, commission, juge]. Analyse multidimensionnelle, préconisations argumentées, références au cadre légal.",
    "rapport",
    "enfance,handicap"
  ],
  [
    "@RECOURS-ADMIN",
    "Recours, Contestation, Procédure administrative",
    "Aide-moi à rédiger un recours administratif gracieux suite à [décision contestée]. Rappelle le contexte, les arguments factuels et juridiques, les pièces jointes, demande de réexamen.",
    "rapport",
    "*"
  ],
  [
    "@ATTESTATION",
    "Attestation, Certificat, Accompagnement",
    "Rédige une attestation d'accompagnement social pour [usager] destinée à [organisme]. Précise la nature de l'accompagnement, la durée, les objectifs travaillés, sans divulguer d'éléments confidentiels.",
    "rapport",
    "*"
  ],
  [
    "@REFORMULATION-NEUTRE",
    "Reformulation, Neutralisation, Objectivité",
    "Reprends ces phrases [texte] et neutralise-les en supprimant tout jugement de valeur, interprétation ou vocabulaire connoté. Reste strictement factuel.",
    "rapport",
    "enfance"
  ],
  [
    "@INTRO-RAPPORT",
    "Accroche, Introduction, Contextualisation",
    "Rédige une introduction de rapport social percutante sur [situation] : présentation succincte, problématique centrale, annonce du plan. Maximum 1 page.",
    "rapport",
    "*"
  ],
  [
    "@CONCLUSION-RAPPORT",
    "Conclusion, Préconisations, Ouverture",
    "Rédige la conclusion de ce rapport [résumé situation] : synthèse de l'analyse, préconisations hiérarchisées et argumentées, ouverture sur les enjeux à moyen terme.",
    "rapport",
    "*"
  ],
  [
    "@CAHIER-CHARGES",
    "Appel à projet, Cahier charges, Action collective",
    "Rédige un cahier des charges pour un projet d'action collective sur [thématique : insertion, parentalité, logement]. Inclus : diagnostic, objectifs, public cible, actions, moyens, évaluation, budget prévisionnel.",
    "rapport",
    "precarite"
  ],
  [
    "@LETTRE-MOTIVATION-USAGER",
    "Candidature, Motivation, Valorisation parcours",
    "Aide [usager] à rédiger une lettre de motivation pour [emploi/formation/logement]. Valorise son parcours, ses compétences transférables, sa motivation. Langage accessible et authentique.",
    "rapport",
    "precarite"
  ],
  [
    "@TS-SYNTHESE",
    "Synthèse, Besoins, Vigilance, Leviers",
    "Résume ce document complexe sous l'angle de l'accompagnement social : quels sont les besoins de l'usager, les points de vigilance prioritaires et les leviers de mobilisation ?",
    "synthese",
    "*"
  ],
  [
    "@CHEF-SYNTHESE",
    "Management, Risques juridiques, Procédures, Responsabilité",
    "Résume cette situation en tant que chef de service : analyse les risques juridiques, la conformité aux procédures, la responsabilité du service et l'impact sur les moyens.",
    "synthese",
    "*"
  ],
  [
    "@SYNTHESE-PLURIDISCIPLINAIRE",
    "Coordination, Partenaires, Synthèse croisée",
    "Synthétise cette situation en intégrant les regards croisés de [liste partenaires : école, santé, justice]. Identifie les convergences, divergences et complémentarités d'intervention.",
    "synthese",
    "*"
  ],
  [
    "@MAIL-USAGER",
    "Courriel, SMS, Communication, Convocation, Bienveillance",
    "Rédige un courriel/SMS à un usager pour [convocation/relance/information]. Utilise un langage simple, un ton bienveillant, précise l'action attendue et l'échéance.",
    "mail",
    "*"
  ],
  [
    "@MAIL-PART",
    "Partenariat, Réponse, Conflits, Limites professionnelles",
    "Rédige une réponse professionnelle, factuelle et constructive à ce courriel partenaire agressif : [mail]. Pose des limites claires tout en restant centré sur l'intérêt de l'usager.",
    "mail",
    "*"
  ],
  [
    "@ECRIT-ACCESSIBLE",
    "FALC, Simplification, Famille, Vulgarisation",
    "Reformule ce compte-rendu professionnel en version accessible pour la famille : supprime le jargon, valorise les points positifs, explicite les objectifs partagés.",
    "synthese",
    "famille"
  ],
  [
    "@ANNONCE",
    "Décision difficile, Empathie, Alliance, Transparence",
    "Aide-moi à préparer l'annonce d'une décision administrative difficile à un usager. Propose une formulation empathique, transparente et sécurisante pour maintenir l'alliance.",
    "synthese",
    "*"
  ],
  [
    "@5ANS",
    "Pédagogie, FALC, Simplification, Vocabulaire simple",
    "Explique [sujet] en Facile À Lire et à Comprendre (FALC) : phrases courtes, vocabulaire du quotidien, structure logique, exemples concrets.",
    "synthese",
    "enfance"
  ],
  [
    "@SYNTHESE-DOSSIER",
    "Dossier complexe, Chronologie, Points clés",
    "Synthétise ce dossier volumineux [description] : chronologie des événements clés, acteurs principaux, interventions menées, situation actuelle, enjeux prioritaires. Maximum 2 pages.",
    "synthese",
    "enfance"
  ],
  [
    "@REUNION-TRANSMIS",
    "Réunion transmission, Passage relais, Continuité",
    "Prépare une trame de transmission orale pour la réunion d'équipe sur [dossier] : points essentiels à transmettre, questions à poser au collectif, décisions à prendre.",
    "synthese",
    "enfance"
  ],
  [
    "@VULGARISATION-JURIDIQUE",
    "Vulgarisation, Droit, Pédagogie juridique",
    "Explique ce texte de loi ou cette procédure juridique [référence] en termes simples et accessibles pour un usager ou un public non-juriste. Utilise des exemples concrets.",
    "synthese",
    "*"
  ],
  [
    "@SUPPORT-VISUEL-SYNTH",
    "Infographie, Schéma, Visualisation",
    "Propose une structure de support visuel (schéma, infographie, tableau) pour présenter synthétiquement cette situation complexe [description] en réunion ou formation.",
    "synthese",
    "enfance"
  ],
  [
    "@NEWSLETTER-EQUIPE",
    "Communication interne, Newsletter, Informations clés",
    "Rédige une newsletter mensuelle pour l'équipe incluant : actualités du service, rappels procédures, partage de pratiques, formations disponibles, agenda. Ton dynamique et fédérateur.",
    "synthese",
    "enfance"
  ],
  [
    "@LIVRET-ACCUEIL",
    "Livret accueil, Information usager, Droits, Fonctionnement",
    "Crée le contenu d'un livret d'accueil pour les usagers du service [type de service]. Inclus : missions, fonctionnement, droits, personnes ressources, démarches, FAQ. Langage accessible.",
    "synthese",
    "*"
  ],
  [
    "@COMPTE-RENDU-REUNION",
    "Réunion, CR, Décisions, Actions, Responsables",
    "À partir de mes notes [notes], rédige un compte-rendu de réunion structuré : participants, ordre du jour, points discutés, décisions prises, plan d'actions (qui fait quoi pour quand).",
    "synthese",
    "enfance"
  ],
  [
    "@QUESTIONS",
    "Entretien, Questions ouvertes, Alliance, Exploration",
    "Je dois mener un entretien avec [profil] concernant [motif]. Suggère 10 questions ouvertes pour explorer la situation et créer l'alliance sans être intrusif. Priorise selon la progression : ouverture/exploration/approfondissement/clôture.",
    "entretien",
    "*"
  ],
  [
    "@REFORMULATION",
    "Reformulation, Empathie, Validation, Clarification",
    "L'usager a dit : [citation]. Propose-moi 3 reformulations empathiques qui valident son ressenti tout en clarifiant ses besoins réels.",
    "entretien",
    "*"
  ],
  [
    "@COLERE",
    "Gestion conflit, Agressivité, Assertivité, Désescalade",
    "Un usager est en colère et dit : [paroles]. Comment répondre avec assertivité et empathie pour désamorcer la tension tout en restant ferme sur le cadre ?",
    "entretien",
    "*"
  ],
  [
    "@PREP-ENTRETIEN",
    "Préparation entretien, Stratégie relationnelle, Trame",
    "Je dois mener un entretien difficile sur [sujet sensible] avec [profil]. Propose une trame : accroche bienveillante, progression des questions, gestion des résistances, clôture.",
    "entretien",
    "*"
  ],
  [
    "@MOTIVATION",
    "Entretien motivationnel, Ambivalence, Changement, Prochaska",
    "L'usager est ambivalent face à [changement]. Quelles questions de l'entretien motivationnel poser pour explorer cette ambivalence et renforcer l'autodétermination ? Identifie son stade de changement (Prochaska).",
    "entretien",
    "*"
  ],
  [
    "@MEDIATION",
    "Médiation, Conflit, Tiers neutre, Négociation",
    "Je dois médiatiser une tension entre [acteurs] à propos de [conflit]. Aide-moi à préparer l'intervention : posture de tiers, recadrage des enjeux, recherche de compromis.",
    "entretien",
    "*"
  ],
  [
    "@QUESTIONS-CIRCULAIRES",
    "Questions circulaires, Systémie, Famille, Perspectives",
    "Propose 10 questions circulaires pour comprendre les dynamiques familiales autour de [problématique] : points de vue croisés, interactions, alliances, coalitions.",
    "entretien",
    "famille"
  ],
  [
    "@CONFRONTATION-BIENVEILLANTE",
    "Confrontation, Feedback, Recadrage",
    "Je dois confronter l'usager sur [comportement/contradiction] tout en préservant l'alliance. Propose une formulation bienveillante mais claire qui ouvre au dialogue.",
    "entretien",
    "*"
  ],
  [
    "@ALLIANCE-THERAPEUTIQUE",
    "Alliance, Engagement, Confiance, Lien",
    "L'usager semble peu engagé dans l'accompagnement [indices]. Comment renforcer l'alliance thérapeutique ? Propose des leviers relationnels et des ajustements de posture.",
    "entretien",
    "*"
  ],
  [
    "@ENTRETIEN-COUPLE",
    "Entretien couple, Conjugalité, Conflits, Communication",
    "Prépare un guide d'entretien pour recevoir un couple en difficulté sur [problématique]. Questions pour chacun et pour le couple, gestion des tensions, neutralité, objectifs.",
    "entretien",
    "famille"
  ],
  [
    "@ENTRETIEN-ENFANT",
    "Entretien enfant, Protection enfance, Grille HAS, Adaptation âge",
    "Crée une grille d'entretien HAS pour un enfant de [âge] ans concerné par [problématique], [avec/sans handicap]. Adapte aux 6 domaines d'évaluation et à son stade développemental. Inclus supports ludiques et indicateurs observables.",
    "entretien",
    "enfance,handicap"
  ],
  [
    "@SILENCE",
    "Silence, Gestion temps mort, Écoute active",
    "Comment gérer les longs silences en entretien avec [profil usager] ? Quand relancer, quand respecter le silence ? Propose des techniques d'accompagnement du silence.",
    "entretien",
    "*"
  ],
  [
    "@RECADRAGE",
    "Recadrage, Perspective, Changement point de vue",
    "L'usager est enfermé dans cette vision négative : [description]. Propose 3 recadrages cognitifs pour ouvrir de nouvelles perspectives sans minimiser sa souffrance.",
    "entretien",
    "enfance"
  ],
  [
    "@CLOTURE-ENTRETIEN",
    "Clôture entretien, Synthèse, Prochaine étape",
    "Comment clôturer cet entretien de manière structurante ? Propose une formulation qui : synthétise les points abordés, valide les décisions, annonce la suite, valorise l'engagement de l'usager.",
    "entretien",
    "*"
  ],
  [
    "@ENTRETIEN-VISIO",
    "Visioconférence, Entretien distance, Adaptation",
    "Adapte ma pratique d'entretien pour un rendez-vous en visioconférence avec [profil]. Points de vigilance techniques et relationnels, compensation de la distance, création du lien.",
    "entretien",
    "*"
  ],
  [
    "@ENFANCE",
    "Protection enfance, IP, Signalement, Danger, Risque",
    "Analyse cette situation au regard du cadre légal de la protection de l'enfance : [description]. Évalue les signaux de danger et aide-moi à argumenter l'opportunité d'une IP ou d'un signalement.",
    "analyse",
    "enfance"
  ],
  [
    "@LOGEMENT",
    "FSL, ASLL, DALO, Expulsion, Impayés, Accès logement",
    "Identifie les dispositifs de maintien ou d'accès au logement (FSL, ASLL, DALO, coordination impayés) adaptés à : [description]. Précise les étapes prioritaires.",
    "analyse",
    "enfance,precarite"
  ],
  [
    "@RSA-INSERTION",
    "RSA, Insertion, CER, Freins périphériques, Emploi",
    "Identifie les freins périphériques à l'insertion (santé, garde, mobilité) et suggère des actions concrètes pour le Contrat d'Engagement Réciproque (CER).",
    "analyse",
    "enfance,precarite"
  ],
  [
    "@BUDGET",
    "Budget, Aide financière, Surendettement, FSL, APL",
    "Analyse ce budget [revenus/charges]. Identifie les postes compressibles, les aides mobilisables (APL, prime d'activité, FSL), les risques de surendettement et propose un plan.",
    "analyse",
    "precarite"
  ],
  [
    "@DROITS",
    "Loi 2002-2, Droits usagers, Consentement, Vie privée",
    "Analyse cette situation sous l'angle de la Loi 2002-2 (respect de la vie privée, libre choix, accès aux documents). Comment garantir l'exercice des droits ici ?",
    "analyse",
    "*"
  ],
  [
    "@HEBERGEMENT-URGENCE",
    "115, SIAO, Urgence sociale, Rupture hébergement",
    "Face à cette rupture d'hébergement [description], identifie les solutions d'urgence (115, SIAO, hébergement citoyen) et les démarches prioritaires immédiates.",
    "analyse",
    "enfance"
  ],
  [
    "@ADDICTION",
    "Addiction, CSAPA, Réduction risques, Prochaska",
    "Analyse cette consommation problématique [description]. Identifie le stade de changement (Prochaska), les leviers de motivation, les risques immédiats, les partenaires CSAPA à mobiliser.",
    "analyse",
    "enfance,agees"
  ],
  [
    "@AIDANT",
    "Aidant familial, Épuisement, Répit, APA, PCH",
    "Analyse la situation de cet aidant familial [contexte]. Repère les signes d'épuisement, identifie les droits/aides (répit, APA, PCH) et les structures de soutien disponibles.",
    "analyse",
    "handicap,agees,famille"
  ],
  [
    "@MDPH",
    "MDPH, Handicap, PCH, AAH, Orientation",
    "Aide-moi à constituer un dossier MDPH pour [personne/situation]. Liste les pièces obligatoires, les volets à compléter, les droits mobilisables (PCH, AAH, RQTH), les délais.",
    "analyse",
    "handicap"
  ],
  [
    "@CURATELLE-TUTELLE",
    "Mesure protection juridique, Curatelle, Tutelle, Mandat",
    "Analyse cette situation [description] : une mesure de protection juridique est-elle nécessaire ? Quel type (sauvegarde, curatelle, tutelle) ? Argumente selon les critères d'altération des facultés.",
    "analyse",
    "enfance"
  ],
  [
    "@VIOLENCE-CONJUGALE",
    "Violences conjugales, Éviction, Ordonnance protection, Hébergement",
    "Face à cette situation de violences conjugales [description], identifie : niveau de danger, mesures de protection (ordonnance, éviction, téléphone grave danger), hébergement d'urgence, partenaires spécialisés.",
    "analyse",
    "enfance,famille"
  ],
  [
    "@SURENDETTEMENT",
    "Surendettement, Banque France, Dossier, Procédure",
    "Aide-moi à accompagner cette personne en surendettement [situation]. Explique la procédure Banque de France, constitution du dossier, recevabilité, plan de redressement, accompagnement budgétaire.",
    "analyse",
    "precarite"
  ],
  [
    "@SANTE-MENTALE",
    "Santé mentale, Psychiatrie, CMP, Hospitalisation",
    "Analyse cette situation de souffrance psychique [description]. Identifie les signes d'alerte, évalue l'urgence, propose les orientations (CMP, urgences psychiatriques, hospitalisation sous contrainte si nécessaire).",
    "analyse",
    "enfance"
  ],
  [
    "@SCOLARITE",
    "Scolarité, AESH, PAI, PPS, Décrochage",
    "Face à ces difficultés scolaires [description], identifie les dispositifs adaptés (AESH, PAI, PPS, ULIS, dérogation) et les démarches à engager. Partenaires : école, MDPH, RASED.",
    "analyse",
    "enfance,handicap"
  ],
  [
    "@REGULARISATION",
    "Séjour irrégulier, Titre séjour, OQTF, DCEM, Préfecture",
    "Analyse la situation administrative de cette personne étrangère [contexte]. Identifie les voies de régularisation possibles (travail, vie privée, santé), les pièces à réunir, les partenaires juridiques.",
    "analyse",
    "*"
  ],
  [
    "@PERSONNE-AGEE",
    "Gérontologie, APA, EHPAD, Maintien domicile, GIR",
    "Évalue les besoins de cette personne âgée [situation]. Identifie le GIR estimé, les aides mobilisables (APA, portage repas, téléassistance), l'opportunité d'un maintien à domicile vs hébergement.",
    "analyse",
    "agees"
  ],
  [
    "@ISOLEMENT",
    "Isolement social, Solitude, Lien social, Animation",
    "Face à cet isolement social sévère [description], propose un plan d'intervention : diagnostic des causes, leviers de remobilisation, partenaires (CCAS, associations), actions collectives.",
    "analyse",
    "enfance"
  ],
  [
    "@ACCOMPAGNEMENT-PENAL",
    "Justice, SPIP, Alternative détention, TIG, Probation",
    "Accompagne cette personne sous main de justice [mesure]. Identifie les obligations, les échéances, les partenaires (SPIP, avocat), l'articulation avec l'accompagnement social global.",
    "analyse",
    "enfance"
  ],
  [
    "@EMPLOI-HANDICAP",
    "Emploi handicap, RQTH, Cap emploi, EA, ESAT",
    "Oriente cette personne en situation de handicap vers l'emploi [profil]. Identifie les dispositifs (RQTH, Cap emploi, EA, ESAT), les aménagements possibles, les freins à lever.",
    "analyse",
    "handicap"
  ],
  [
    "@JEUNE-MAJEUR",
    "Jeune majeur, Contrat jeune majeur, ASE, AFAD",
    "Analyse la situation de ce jeune sortant de l'ASE [contexte]. Évalue l'opportunité d'un contrat jeune majeur, identifie les dispositifs d'accompagnement (AFAD, Garantie Jeunes, Mission locale).",
    "analyse",
    "enfance"
  ],
  [
    "@COPROPRIETE-DEGRADEE",
    "Copropriété dégradée, Insalubrité, OPAH, Relogement",
    "Face à cette situation de copropriété dégradée [description], identifie : procédures (insalubrité, péril), dispositifs d'amélioration (OPAH), droit au relogement, recours possibles.",
    "analyse",
    "enfance,precarite"
  ],
  [
    "@ENERGIE",
    "Précarité énergétique, Impayés énergie, FSL énergie, Chèque énergie",
    "Analyse cette situation de précarité énergétique [description]. Identifie les aides (FSL énergie, chèque énergie, tarif social), prévention coupure, accompagnement à la maîtrise énergétique.",
    "analyse",
    "enfance,precarite"
  ],
  [
    "@FAMILLE-MONOPARENTALE",
    "Monoparentalité, ASF, AGEPI, CAF, Conciliation",
    "Accompagne cette famille monoparentale [situation]. Identifie les droits spécifiques (ASF, AGEPI, aide CAF), modes de garde, médiation familiale, conciliation vie pro/perso.",
    "analyse",
    "famille"
  ],
  [
    "@MIGRATION-MINEURS",
    "MNA, ASE, Évaluation minorité, DCEM, Tuteur",
    "Analyse la situation de ce Mineur Non Accompagné [contexte]. Procédure d'évaluation minorité, prise en charge ASE, scolarisation, accès aux soins, perspective titre de séjour à 18 ans.",
    "analyse",
    "enfance"
  ],
  [
    "@ACCOMPAGNEMENT-FIN-VIE",
    "Fin de vie, Directives anticipées, Personne confiance, HAD",
    "Accompagne cette personne en fin de vie [situation]. Identifie les dispositifs (HAD, soins palliatifs), droits (directives anticipées, personne de confiance), soutien aidants, questions éthiques.",
    "analyse",
    "enfance"
  ]
];