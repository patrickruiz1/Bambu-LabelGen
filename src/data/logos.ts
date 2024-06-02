const logos: { [key: string]: string } = {
    /* Empty/no logo */
    '': '',

    /* Bambu Lab */
    'Bambu Lab': '<path transform="translate(128.364 1113.674) scale(11.07532)" d="M19.673 2.804V1.543h3.251c.451.007.883.098 1.262.261a2.192 2.192 0 0 1 .968 3.373l-.026.036c.459.384.752.963.752 1.61a2.093 2.093 0 0 1-2.059 2.095l-.033.002-.033-.002H18.07V3.421l1.603-.617Zm0 0V4.55h3.373a.856.856 0 0 0 .365-.081.798.798 0 0 0 .486-.61.874.874 0 0 0-.532-.994.726.726 0 0 0-.286-.061h-3.406Zm3.629 4.884a.94.94 0 0 0 .568-1.69.932.932 0 0 0-.568-.193h-3.629v1.883h3.629Zm7.43 4.644c.862 0 1.561.695 1.561 1.56l-.001 4.107h-6.033a1.564 1.564 0 0 1-1.562-1.566v-.44c0-.864.699-1.566 1.562-1.566h4.569l.002-.719a.157.157 0 0 0-.156-.157h-5.12l-.459-1.219h5.637Zm.096 4.435v-1.116h-4.512a.156.156 0 0 0-.156.156v.803c0 .087.07.157.156.157h4.512Zm8.161-4.435c.862 0 1.562.701 1.562 1.565v2.536c0 .865-.7 1.566-1.562 1.566h-5.282v-7.081h1.603v1.414h3.679Zm-.011 4.28v-2.88a.156.156 0 0 0-.156-.156H35.31v3.192h3.512c.087 0 .156-.07.156-.156ZM44.009 3.25c.863 0 1.562.701 1.562 1.565v4.102h-1.568V4.65a.156.156 0 0 0-.156-.156h-2.078a.156.156 0 0 0-.156.156v4.267h-1.565V4.65a.156.156 0 0 0-.157-.156h-2.107a.156.156 0 0 0-.156.156v4.267H36.07V3.25h7.939Zm16.525 0h1.464v4.101c0 .865-.699 1.566-1.561 1.566h-3.878a1.564 1.564 0 0 1-1.561-1.566V3.25h1.475v4.28c0 .086.07.156.156.156h3.75c.086 0 .155-.07.155-.156V3.25ZM28.622 8.917a1.564 1.564 0 0 1-1.561-1.566v-.44c0-.865.699-1.565 1.561-1.565h4.57l.002-.72a.156.156 0 0 0-.157-.156h-5.119l-.46-1.22h5.637a1.56 1.56 0 0 1 1.562 1.56l-.002 4.107h-6.033Zm-.098-2.192v.804c0 .086.07.156.156.156h4.512V6.569H28.68a.156.156 0 0 0-.156.156Zm23.602-3.479c.862 0 1.561.701 1.561 1.566v2.536c0 .864-.699 1.565-1.561 1.565h-5.282V1.832h1.603v1.414h3.679Zm-.011 4.28v-2.88a.156.156 0 0 0-.156-.156h-3.512v3.192h3.512c.086 0 .156-.07.156-.156ZM7.395 17.999V6.719l6.4 2.527v8.753h-6.4ZM7.395 0h6.4v8.169l-6.4-2.529V0ZM0 0h6.4l.001 8.753L0 11.28V0Zm0 17.997v-5.64l6.401-2.529-.001 8.169H0ZM18.07.629l1.603-.617V1.54l-1.603.618V.629ZM17.998 11h1.639v5.672h3.848L23.998 18h-6v-7Z" />',

    /* SUNLU */
    'SUNLU': '<path transform="translate(128.364 1113.674)" d="M122.38 22.526v20.9H31.602a9 9 0 0 0-9 9v25.759a9 9 0 0 0 9 9h60.85a30.001 30.001 0 0 1 30 30v29.496a30.001 30.001 0 0 1-30 30H1.545v-20.16h90.896a9 9 0 0 0 9-9v-30.212a9 9 0 0 0-9-9H31.503a30.001 30.001 0 0 1-30-30V52.487a30 30 0 0 1 30.013-30l90.864.04Zm24.5-.041h20.192v125.043a9.002 9.002 0 0 0 9 9h61.724a9 9 0 0 0 9-9V22.485h21.017V146.68a30.001 30.001 0 0 1-30 30h-60.889c-16.565 0-29.994-13.425-30-29.99l-.044-124.206Zm414.664 0h20.192v125.043a9.002 9.002 0 0 0 9 9h61.724a9 9 0 0 0 9-9V22.485h21.017V146.68a30.001 30.001 0 0 1-30 30h-60.889c-16.565 0-29.994-13.425-30-29.99l-.044-124.206Zm-123.84 0h20.192v125.043a9.002 9.002 0 0 0 9 9h70.573v20.153h-69.72c-16.566 0-29.995-13.425-30.001-29.99l-.044-124.206ZM292.309 176.68H312.5V51.637a9.002 9.002 0 0 1 9-9h61.724a9 9 0 0 1 9 9V176.68h21.017V52.484a30.001 30.001 0 0 0-30-30h-60.889c-16.565 0-29.994 13.425-30 29.99l-.044 124.206Z" />',
    
    /* JAYO */
    'JAYO': '<path transform="translate(128.364 1113.674)" d="m 476.76001,100.42333c -0.012,27.217 11.7,48.347 27.247,50.604 0.993,0.125 1.738,0.97 1.738,1.97 0.017,4.585 0.017,16.7 0.017,21.6v 0.004c 0,1.097 -0.903,2 -2,2q -0.061,0 -0.122,-0.004c -30.403,-2.042 -59.56,-26.27 -60.741,-76.186 1.181,-49.956999 30.708,-75.794998 61.151,-77.906998q 0.06,-0.003 0.121,-0.004a 2.01,2.01 0 0 1 2,1.998c 0.004,4.954 0.004,17.273999 0.004,21.753999 0,0.949 -0.676,1.774 -1.607,1.961 -21.17,4.418 -27.8,30.785 -27.808,52.209999m 85.212,0.104c -0.008,-21.424999 -6.64,-47.791999 -27.808,-52.219999a 1.996,1.996 0 0 1 -1.596,-1.951c -0.012,-4.48 -0.012,-16.799999 -0.012,-21.753999a 2.014,2.014 0 0 1 2.125,-2c 30.444,2.118 59.969,27.955999 61.151,77.912998 -1.181,49.917 -30.337,74.144 -60.741,76.182l -0.118,0.003a 2.01,2.01 0 0 1 -2,-1.998c -0.003,-4.901 -0.003,-17.016 -0.003,-21.6 0,-1.01 0.751,-1.862 1.751,-1.988 15.55,-2.24 27.262,-23.37 27.251,-50.587m -283.252,-76.191998a 1,1 0 0 1 -0.101,-0.437c 0,-0.549 0.452,-1 1,-1h 35.722c 0.395,0 0.755,0.233 0.915,0.594l 20.094,45.111999a 13.5,13.5 0 0 1 -0.196,11.401l -14.432,29.615999a 1.002,1.002 0 0 1 -1.801,-0.003zm 104.45,-0.842a 1,1 0 0 1 0.916,-0.595h 31.903a 1.007,1.007 0 0 1 0.904,1.431l -49.307,103.651998 0.218,47.213v 0.006c 0,0.548 -0.45,0.999 -0.998,1l -31.14,0.097a 1.005,1.005 0 0 1 -1.004,-0.99l -0.478,-41.655zm -257.16,153.060998h -10e-4a 1.004,1.004 0 0 1 -0.95,-1.313l 49.621,-151.383998c 0.134,-0.411 0.519,-0.69 0.951,-0.69l 24.551,-0.02h 0.003a 1.004,1.004 0 0 1 0.956,1.294l -46.252,151.404998c -0.128,0.42 -0.518,0.708 -0.957,0.708zm 81.873,-104.739999a 25.77,25.77 0 0 1 0.557,-15.588l 9.66,-27.041999a 2.34,2.34 0 0 1 2.199,-1.551c 1.016,0 1.921,0.664 2.226,1.634l 46.027,145.983998q 0.047,0.148 0.047,0.303c 0,0.549 -0.451,1 -1,1h -29.776c -0.448,0 -0.844,-0.3 -0.964,-0.732zm -28.65,72.784999h -0.002a 1.004,1.004 0 0 1 -0.964,-1.266l 6.877,-25.193c 0.118,-0.435 0.516,-0.738 0.966,-0.738h 18.58c 0.45,0 0.848,0.303 0.966,0.738l 6.886,25.193a 1.004,1.004 0 0 1 -0.964,1.266h -0.002zm -179.19300661,-17.79c 0.016,-0.534 0.457,-0.965 0.99100001,-0.97l 28.5919996,-0.251h 0.01c 0.546,0 0.997,0.448 1,0.994 0.122,15.228 3.3,23.942 13.87,25.578a 1,1 0 0 1 0.846,0.979c 0.032,3.72 0.144,18.36 0.174,22.383a 1.004,1.004 0 0 1 -1.026,1.009c -29.637,-0.766 -45.37999961,-18.05 -44.45699961,-49.721m 65.38899961,49.014q -0.087,0.015 -0.175,0.015c -0.548,0 -0.999,-0.45 -1,-0.998 -0.003,-4.658 -0.003,-21.6 -0.003,-24.25 0,-0.225 0.076,-0.444 0.216,-0.62 5.503,-6.93 6.79,-12.815 6.864,-16.635V 23.650332c 0,-0.554 0.449,-1.003 1.002,-1.003h 29.396007c 0.552,0 1,0.45 1,1.003V 133.16633c -2.697,23.924 -14.703997,38.568 -37.300007,42.658" />',

    /* Eryone */
    'Eryone': '<path transform="translate(128.364 1113.674)" d="M349.048 112.28v14.456c0 2.627-2.133 4.76-4.76 4.76s-4.761-2.133-4.761-4.76V112.28c-.19-4.865-4.42-8.099-9.354-8.318l-35.134-.008v22.782c0 2.627-2.132 4.76-4.76 4.76s-4.76-2.133-4.76-4.76V71.652a4.763 4.763 0 0 1 4.76-4.761h45.338c9.154 1.124 16.242 9.07 16.242 18.531 0 6.023-2.872 11.375-7.321 14.76 2.798 3.098 4.437 7.275 4.51 12.098m0 0c0-.113.001.111 0 0m-16.141-35.868h-37.868v18.021l38.677-.036c4.729 0 8.183-4.243 8.183-8.975s-4.264-9.01-8.992-9.01m181.32-4.76v-.206q.016-.33.077-.65a4.7 4.7 0 0 1 1.316-2.511 4.72 4.72 0 0 1 3.163-1.39 4.75 4.75 0 0 1 3.568 1.39l47.34 47.34V71.653c0-2.628 2.135-4.761 4.762-4.761s4.762 2.133 4.762 4.76v55.085a4.75 4.75 0 0 1-1.594 3.551 4.76 4.76 0 0 1-6.731 0l-47.143-47.142v43.59a4.76 4.76 0 1 1-9.519.001zM391.53 103.943c-16.202-1.858-28.784-15.617-28.784-32.313h9.936c0 12.477 10.117 22.592 22.596 22.592s22.596-10.115 22.596-22.592h9.937c0 15.994-11.546 29.292-26.76 32.016v3.41h.291v6.683h-.291v12.997a4.763 4.763 0 0 1-4.76 4.76 4.763 4.763 0 0 1-4.761-4.76v-12.997h-.292v-6.684h.292zm-303.81-3.038 25.738 14.944-30.274 17.356-25.981-15.165 29.595-17.138-25.522-14.898L91.33 68.6l26.2 15.213zm570.703-29.253a4.76 4.76 0 0 1-4.762 4.76h-55.139c-2.626 0-4.762-2.133-4.762-4.76s2.136-4.761 4.762-4.761h55.139a4.76 4.76 0 0 1 4.762 4.76m0 55.085a4.76 4.76 0 0 1-4.762 4.76h-55.139a4.765 4.765 0 0 1-4.762-4.76 4.765 4.765 0 0 1 4.762-4.76h55.139a4.76 4.76 0 0 1 4.762 4.76m0-27.542a4.76 4.76 0 0 1-4.762 4.76h-55.139c-2.626 0-4.762-2.133-4.762-4.76s2.136-4.76 4.762-4.76h55.139a4.76 4.76 0 0 1 4.762 4.76M467.473 66.89c17.829 0 32.304 14.475 32.304 32.303s-14.475 32.302-32.303 32.302-32.303-14.474-32.303-32.302 14.475-32.303 32.303-32.303m0 9.508c-12.58 0-22.794 10.214-22.794 22.795s10.213 22.794 22.794 22.794 22.794-10.214 22.794-22.794-10.214-22.795-22.794-22.795m-195.758-3.735a4.763 4.763 0 0 1-4.76 4.76h-55.142c-2.627 0-4.76-2.133-4.76-4.76s2.133-4.76 4.76-4.76h55.141a4.763 4.763 0 0 1 4.76 4.76m0 55.084a4.763 4.763 0 0 1-4.76 4.76h-55.14a4.763 4.763 0 0 1-4.76-4.76 4.763 4.763 0 0 1 4.76-4.76h55.14a4.763 4.763 0 0 1 4.76 4.76m0-27.542a4.76 4.76 0 0 1-4.76 4.76h-55.14c-2.628 0-4.76-2.133-4.76-4.76s2.132-4.76 4.76-4.76h55.14a4.76 4.76 0 0 1 4.76 4.76m-96.982-48.293v99.41L91.463 199.4v-34.81l53.056-30.417.506-65.614zm-95.57-12.366L30.214 67.593v66.579L83.27 164.59v34.81L0 151.322V50.441l49.45-28.55zM57.644 17.16 87.367 0l80.447 46.446-29.708 17.152z"/>',
    
    /* Polymaker */
    'Polymaker': '<path transform="translate(128.364 1113.674)" d="M129.305 84.813a597.158 597.158 0 0 0-2.458-3.6 33.291 33.291 0 0 0-40.328-11.774 27.585 27.585 0 0 0-5.865 3.248c-15.337 9.248-14.21 29.321-14.21 29.321v81.198c-1.894 7.714-7.262 7.263-10.194 6.36a103.41 103.41 0 0 1-6.767-3.653 101.29 101.29 0 0 1-29.772-26.615 76.84 76.84 0 0 1-10.962-18.54l-.496-1.353a99.215 99.215 0 0 1-8.21-39.607v-.316a84.193 84.193 0 0 1 7.172-36.81l.316-.811.722-1.76c.36-.721.677-1.443 1.038-2.21a90.984 90.984 0 0 1 2.12-4.195A99.675 99.675 0 0 1 85.75 1.098L90.264.51a95.407 95.407 0 0 1 33.922 2.571l2.166.632 1.218.27A93.973 93.973 0 0 1 159.146 20c25.848 17.999 35.546 48.944 35.23 49.305-.315.36-.766-.226-.766-.226l-.948-.902a50.442 50.442 0 0 0-5.368-3.834 45.114 45.114 0 0 0-34.283-3.744 41.23 41.23 0 0 0-24.224 20.976c-.18.586.045.721-.632.902-.207.054.429 1.177 1.15 2.337Zm0 0c3.023 4.452 1.358 2.17 0 0Zm154.93-1.21c.41 1.485.74 2.991.993 4.512a22.925 22.925 0 0 1-.993 10.285 24.206 24.206 0 0 1-15.157 16.149 25.388 25.388 0 0 1-14.525.722 28.388 28.388 0 0 1-9.022-4.511v42.403c0 5.323.947 10.375-2.977 12a5.31 5.31 0 0 1-3.158 0c-3.834-1.219-3.293-4.873-3.293-9.744V92.49a25.33 25.33 0 0 1 0-4.962 28.315 28.315 0 0 1 4.511-11.232 24.792 24.792 0 0 1 12.856-9.022 35.63 35.63 0 0 1 4.06-.902h2.075a24.558 24.558 0 0 1 24.63 17.232Zm-8.66 10.33a15.69 15.69 0 0 0-.903-8.525 14.828 14.828 0 0 0-14.931-9.022h-1.489l-2.932.812a15.432 15.432 0 0 0-9.022 9.022 12.707 12.707 0 0 0-.767 6c.086 1.046.253 2.088.496 3.112a14.986 14.986 0 0 0 9.022 9.97 12.489 12.489 0 0 0 6.586 1.082 15.31 15.31 0 0 0 12.857-9.022c.469-1.105.83-2.255 1.082-3.428Zm45.11-27.652h-.362a24.36 24.36 0 0 1 23.638 15.563 25.632 25.632 0 0 1 0 18.315 24.783 24.783 0 0 1-15.518 14.345 39.268 39.268 0 0 1-6.586 1.128h-2.571l-2.3-.226a32.362 32.362 0 0 1-5.685-1.714 24.779 24.779 0 0 1-13.533-15.067 22.582 22.582 0 0 1-1.127-11.052 29.412 29.412 0 0 1 1.127-4.736 25.289 25.289 0 0 1 15.293-15.067 33.611 33.611 0 0 1 4.962-1.263l2.661-.226Zm14.75 30.81h-.225a15.937 15.937 0 0 0-.046-12.089 14.868 14.868 0 0 0-14.48-9.022h-1.488l-2.933.722a15.446 15.446 0 0 0-9.473 9.292 15.175 15.175 0 0 0 8.797 18.947c2.039.97 4.29 1.407 6.54 1.263a24.585 24.585 0 0 0 3.88-.677 15.03 15.03 0 0 0 9.428-8.435Zm35.05-58.642-.36 68.973a16.33 16.33 0 0 1 0 4.781 5.057 5.057 0 0 1-4.06 3.203 4.935 4.935 0 0 1-5.323-3.473 19.848 19.848 0 0 1 0-4.511V41.877a14.66 14.66 0 0 1 .406-5.052 5.06 5.06 0 0 1 2.751-2.617l1.128-.27a4.845 4.845 0 0 1 5.458 4.51Zm272.284 68.567-.226.18a9.06 9.06 0 0 1 1.489 2.436 4.883 4.883 0 0 1-1.85 5.458c-4.195 2.842-7.037-1.669-8.706-3.789l-16.961-20.21v15.925c.171 1.79.077 3.6-.27 5.368a4.827 4.827 0 0 1-3.655 3.067 4.534 4.534 0 0 1-5.368-3.338 17.972 17.972 0 0 1 0-4.51V41.831a14.607 14.607 0 0 1 .361-4.827 4.827 4.827 0 0 1 2.481-2.436l1.399-.36c5.909-.09 5.142 4.871 5.142 10.555v33.2c0 .678-.541 2.843 0 2.662.541-.18.812-.631 1.173-.947l3.338-2.797 9.789-8.165c2.39-1.894 4.691-4.285 8.21-1.398a5.115 5.115 0 0 1 .496 6.36l-14.345 12.27 17.503 21.067ZM435.263 68.853l-.315.18c.437 2.53.54 5.111.315 7.669v31.577c.361 3.753.316 7.533-.135 11.277a36.101 36.101 0 0 1-14.3 21.833 37.757 37.757 0 0 1-11.548 5.64 48.538 48.538 0 0 1-6.676 1.172c-1.092.18-2.202.18-3.293 0h-2.436c-2.256-.406-3.744-1.038-4.511-2.797a4.831 4.831 0 0 1 3.203-6.586c1.714-.09 3.428-.09 5.142 0a46.438 46.438 0 0 0 6.135-1.128 27.36 27.36 0 0 0 18.044-16.78 33.77 33.77 0 0 0 1.624-7.398c.09-.628.09-1.268 0-1.895l-.316.316c-.947.631-1.85 1.308-2.751 1.984a26.967 26.967 0 0 1-6.993 2.797 25.595 25.595 0 0 1-12.18-.541 23.881 23.881 0 0 1-16.329-16.194 39.904 39.904 0 0 1-.902-11.052V77.739a30.133 30.133 0 0 1 .36-8.706 4.737 4.737 0 0 1 2.707-2.48l1.038-.226a4.528 4.528 0 0 1 4.872 3.653c.18 1.8.18 3.614 0 5.414v17.638a15.576 15.576 0 0 0 14.39 14.796 14.128 14.128 0 0 0 8.706-2.21 16.203 16.203 0 0 0 7.398-11.594 38.632 38.632 0 0 0 0-6.045V75.8a24.738 24.738 0 0 1 .316-6.946 4.511 4.511 0 0 1 8.435 0Zm307.785-2.21-.316.18a4.953 4.953 0 0 1 .09 7.037c-1.984 1.895-6.09.857-9.021 1.669a15.585 15.585 0 0 0-10.691 9.653 30.314 30.314 0 0 0-.993 11.188v10.69a20.58 20.58 0 0 1 0 5.053c-.6 2.4-2.977 3.947-5.413 3.519-4.691-.903-4.015-5.098-4.015-10.51V79.272a34.238 34.238 0 0 1 .677-11.097 4.792 4.792 0 0 1 4.34-2.774 4.804 4.804 0 0 1 4.682 5.751l1.985-1.533a24.078 24.078 0 0 1 6.45-3.293 39.916 39.916 0 0 1 4.286-.948h2.03a9.022 9.022 0 0 1 5.91 1.263Zm-68.522-.497-.316.18a22.6 22.6 0 0 1 22.736 14.571c.992 2.707 2.346 9.699.767 11.729-1.58 2.03-6.225 1.443-9.744 1.443h-26.254a10.832 10.832 0 0 0 1.94 5.143 14.976 14.976 0 0 0 17.277 6.45 15.811 15.811 0 0 0 5.413-3.067c1.083-.857 1.714-2.165 3.113-2.752a4.534 4.534 0 0 1 5.778 4.33l-.004.181a10.105 10.105 0 0 1-4.511 5.639 23.087 23.087 0 0 1-9.022 4.51 24.639 24.639 0 0 1-20.074-4.51 25.13 25.13 0 0 1-8.39-26.66 27.012 27.012 0 0 1 4.826-9.022 23.421 23.421 0 0 1 11.142-7.398c1.2-.334 2.423-.591 3.654-.767h1.67Zm12.18 19.803-.316.18c1.07.114 2.143.082 3.203-.09a9.008 9.008 0 0 0-2.12-5.322 14.494 14.494 0 0 0-12.721-5.594h-1.218l-2.391.541a13.537 13.537 0 0 0-7.669 5.774c-.496.812-1.94 3.248-1.624 4.511h24.856Zm-96.04.632-.315.18c.578 3.5.835 7.051.767 10.601v10.466a11.29 11.29 0 0 1-.722 5.503 4.737 4.737 0 0 1-3.956 2.134 4.76 4.76 0 0 1-4.705-5.292 27.943 27.943 0 0 1-9.698 4.782 25.275 25.275 0 0 1-13.533-.632 24.919 24.919 0 0 1-15.563-15.337 27.093 27.093 0 0 1 .27-16.961 24.91 24.91 0 0 1 14.751-14.435 30.663 30.663 0 0 1 4.872-1.218l2.39-.226a24.63 24.63 0 0 1 25.443 20.435Zm-10.42 10.465-.315.18a16.457 16.457 0 0 0 .316-12.044 14.868 14.868 0 0 0-14.571-9.518h-1.398l-2.933.722a15.504 15.504 0 0 0-10.203 14.548 15.506 15.506 0 0 0 9.301 14.187 12.335 12.335 0 0 0 6.677 1.263 23.903 23.903 0 0 0 3.383-.586 15.211 15.211 0 0 0 9.744-8.752Zm-51.74-11.232-.542 19.984c0 4.826.451 7.94-3.067 9.337a5.368 5.368 0 0 1-3.564 0 4.917 4.917 0 0 1-2.932-2.841 11.187 11.187 0 0 1 0-3.339V90.46a29.15 29.15 0 0 0-.316-6.721 11.44 11.44 0 0 0-10.105-8.48 10.623 10.623 0 0 0-6.946 1.443 11.368 11.368 0 0 0-5.775 7.263 27.797 27.797 0 0 0-.315 6.27v17.683c0 4.782-.361 7.308-4.511 7.984a4.511 4.511 0 0 1-2.978-.721c-3.293-1.985-2.57-6.36-2.57-11.503V90.957a27.77 27.77 0 0 0-.407-7.128 11.151 11.151 0 0 0-6.27-7.127 14.467 14.467 0 0 0-3.925-1.218 11.183 11.183 0 0 0-7.127 1.534 11.422 11.422 0 0 0-5.639 7.804 28.266 28.266 0 0 0 0 5.593v18.044c.14 1.182.14 2.382 0 3.564a4.889 4.889 0 0 1-2.932 3.158 5.143 5.143 0 0 1-2.706.36 5.066 5.066 0 0 1-3.745-2.932 9.184 9.184 0 0 1 0-3.022v-36.54a14.435 14.435 0 0 1 0-3.473 4.88 4.88 0 0 1 8.346-1.669 5.663 5.663 0 0 1 .947 3.7v1.94a31.126 31.126 0 0 1 3.068-3.384 17.652 17.652 0 0 1 15.608-3.834c1.583.374 3.103.983 4.51 1.804a15.876 15.876 0 0 1 5.008 4.51 23.5 23.5 0 0 0 1.488 2.572 7.24 7.24 0 0 1 1.354-2.21 18.766 18.766 0 0 1 9.653-6.857l3.338-.677h1.489a20.142 20.142 0 0 1 20.886 15.744 24 24 0 0 1 .676 4.601Zm-329.619 10.06a92.087 92.087 0 0 1-5.142 35.727 104.6 104.6 0 0 1-54.132 59.815h-.27l-.858.406c-1.082.406-2.571 1.038-4.51 1.714h-.271l-2.842.993-5.368 1.443a103.193 103.193 0 0 1-18.044 3.068c-1.805.316-3.61.316-5.504.316h-2.661a99.941 99.941 0 0 1-27.968-3.925s-1.128-.406-1.263-.586c-.136-.18-.046-.497.496-.857a22.275 22.275 0 0 0 5.142-13.037l-.27-57.876s.18-.451.586 0a32.66 32.66 0 0 0 23.277 10.014c2.201.163 4.416.04 6.586-.36a34.699 34.699 0 0 0 20.119-12.135 37.437 37.437 0 0 0 7.082-19.803 27.891 27.891 0 0 1 0-4.511 30.242 30.242 0 0 1 11.684-21.743 34.351 34.351 0 0 1 27.065-7.444 33.057 33.057 0 0 1 27.066 28.78Z" />',

    /* eSun */
    'eSun': '<path transform="translate(128.364 1113.674)" d="M357.319 51.267c-19.656-16.924-42.172-19.331-67.046-9.768-13.011 6.88-14.67 17.849-8.83 24.99 7.339 8.973 24.919 15.213 41.246 23.254 23.52 10.195 45.467 44.026 10.142 72.54-34.8 28.09-91.333 23.749-123.962 11.772l4.298-26.993c22.222 14.073 51.238 16.77 73.855 5.52 2.58-1.283 13.035-8.387 13.753-17.609.748-9.61-8.749-21.503-32.066-30.599-13.21-5.153-34.491-17.973-38.532-33.455-4.465-17.103 6.249-31.92 8.972-34.572 32.696-31.848 81.81-29.367 123.089-14.554l-4.92 29.474Zm32.896-26.778 48.408-13.216-18.517 117.023c-.467 8.012 1.758 15.984 6.624 21.029 6.46 6.696 16.925 8.489 22.829 8.433 6.568-.062 17.733-4.293 25.894-13.071 6.684-7.191 7.786-15.811 9.194-23.76l15.561-96.41 48.538-13.244-15.835 101.581c-1.283 8.022-8.45 18.286-13.832 25.108-11.82 14.993-25.483 24.19-43.284 32.95-18.292 9.005-58.693 17.208-82.077 4-6.89-3.893-24.57-11.4-20.833-42.085l17.33-108.338ZM574 36.204l-7.373-14.174 42.183-10.757 56.067 107.341 15.493-94.04 48.203-13.301-25.737 163.208-42.56 9.86-48.67-93.101-13.338 80.989-48.095 11.097L574 36.204Zm-388.963 127.92c-20.441 15.836-53.832 24.379-78.54 24.449C23.297 188.806 0 134.65 0 106.553 0 78.456 16.82 8.605 120.77.343c50.065-3.98 74.986 27.56 77.304 47.576.36 3.106 2.726 14.177-1.783 26.903-5.846 16.5-38.609 46.11-65.054 54.12-8.815 2.67-21.303 4.787-32.316 5.297-11.935.553-22.092-.62-22.732-.65-9.854-.462-16.928-.221-16.915-.294-.221-35.027 29.174-65.54 67.618-79.054-32.2 17.865-54.25 48.893-56.371 67.748 48.572-.248 73.65-21.988 86.438-79.178 1.113-4.975 3.187-9.87 4.696-15.116-19.343 3.883-37.907 4.476-53.82 7.999-17.328 3.835-31.616 10.821-42.97 21.019-24.203 21.736-32.453 62.393-12.56 84.02 8.363 9.093 20.435 17.943 38.53 20.565 27.929 4.046 65.497-3.563 89.353-23.307l4.849 26.133Z"/>',

    /* Elegoo */
    'Elegoo': '<path transform="translate(128.364 1113.674)" d="m525.126 68.456.017 36.766v47.812H498.42V135.74c-.306.221-7.831 8.191-17.114 12.623-9.74 4.65-21.4 5.768-27.944 5.768-42.55 0-75.787-34.533-75.787-77.066S410.812-.002 453.362-.002c27.24 0 51.201 14.154 64.917 35.5l-24.597 17.169c-7.96-15.034-23.04-25.189-40.32-25.189-25.56 0-44.386 22.22-44.386 49.587 0 27.368 18.826 49.586 44.386 49.586 20.146 0 34.06-13.8 40.424-33.047l-1.864-.044h-43.389V68.653h50.476a3.228 2.808 0 0 1-.007-.047l26.124-.15ZM111.736 2.928l-.15 26.892H30.812v32.777H96.23v27.054H30.843v34.582h80.786v28.801H0V2.928h111.737Zm255.848 0-.152 26.892h-80.771v32.777h65.415v27.054h-65.385v34.582h80.786v28.801h-111.63V2.928h111.737Zm-232.958 0h29.125V126.03h76.738v25.174H134.626V2.928Zm613.157 0c37.334 0 67.71 33.27 67.71 74.167 0 40.895-30.376 74.167-67.71 74.167-23.117 0-42.221-6.53-54.965-18.084-13.287-12.047-22.8-28.938-29.163-45.374-15.454-39.92-28.216-47.687-53.573-46.56-17.252.767-31.172 16.94-31.172 35.851s14.007 36.252 31.272 36.248c18.304 0 29.36-3.507 40.86-19.905a1492.89 1298.68 0 0 1 3.647 6.239c5.58 9.591 11.194 19.24 17.133 28.602-13.863 16.066-33.228 22.983-61.6 22.983-37.335 0-67.71-33.272-67.71-74.167 0-40.897 30.375-74.167 67.71-74.167 24.11 0 42.493 6.315 55.473 18.695 12.443 11.872 22.695 28.134 28.657 44.761 15.638 43.6 32.97 48.58 53.068 45.984 17.146-2.216 31.675-16.361 31.675-35.273s-16.592-38.077-33.859-38.077c-18.3 0-25.413 3.621-37.712 19.368a1739.176 1512.926 0 0 1-3.65-6.238c-5.576-9.59-11.19-19.238-17.13-28.601 13.865-16.063 32.664-20.619 61.04-20.619Z"/>',

    /* Prusament */
    'Prusament': '<path transform="translate(128.364 1113.674) scale(1.27226)" d="M0 0h842.48v144.56H0V0Zm58.87 88.56C80.35 88.56 98 80.52 98 56.64c0-21.96-16-30.36-37-30.36H26.71v91.8h24.36V88.56h7.8Zm2.28-45.36c8.4 0 13.2 3.96 13.17 13.84 0 9.48-4.8 14.16-13.32 14.16h-9.93v-28h10.08Zm98.72 74.88h25.84l-20.76-38.76v-.24c8.8-3.96 16.8-12.12 16.8-25.2 0-13.8-7.8-20.88-17.16-24.6-6.24-2.52-13.32-3-18.84-3h-37.32v91.8h24.36V85.32h10.68l16.4 32.76Zm-17.24-75.72c5.52 0 14.37 2.16 14.4 13.08 0 10.08-7.2 13.32-14.64 13.32h-9.6v-26.4h9.84Zm419.51 75.72-.03-91.8h-34.92L514.6 66.72c-2.28 7.44-3.6 14.52-3.6 14.52h-.29a113.023 113.023 0 0 0-3.6-14.4l-13-40.56h-34.92v91.76h21.6V50.12h.36a211.26 211.26 0 0 0 5.64 22l14.4 46h16.9l13.91-46c3.51-11.64 5.9-22.12 5.9-22.12h.36v68.08h23.88Zm77.41 0v-17.52h-38.4V81.12H637V63.8h-35.85V44h37.07V26.28h-61.43v91.8h62.76Zm92.27 0 .02-91.8H710v55.8h-.32A88.89 88.89 0 0 0 702 66l-23.69-39.72h-25.8v91.8h21.6V60.24h.36a99.67 99.67 0 0 0 8.28 16.68l24.84 41.16h24.23ZM271 85.2V26.28h-24v54c0 5.52.36 12-2.4 15.6-2.76 3.6-6.84 5.16-12.36 5.16-5.04 0-9-1.44-11.76-5.16s-2.88-10.08-2.88-15.6l.12-54h-24.36V85.2c0 23.28 15.24 34.8 38.64 34.8s39-11.52 39-34.8Zm47.67 34.8c24.24 0 38.76-10.8 38.76-32 0-13.84-8.76-22.6-24.24-25.48l-14.4-2.64c-7.8-1.44-10.44-4.32-10.44-9.24 0-5.28 4.44-8.4 10.8-8.4 7.2 0 10.68 4.56 10.92 9.12h24.83c-.47-14.88-9.95-26.4-35.63-26.4-23.64 0-36.12 12.48-36.12 29.4 0 15.96 11.16 24 23.16 26.4l14.16 2.76c8.64 1.6 11.64 4.2 11.64 9.6 0 5.4-4.68 9.6-12.84 9.6-7.68 0-12.48-4.16-13.2-11.16h-25.32c.92 19.68 14.4 28.44 37.92 28.44Zm106.92-1.92h25.32l-32.16-91.8h-26.88l-31.8 91.8H383l5.39-16.56h31.92l5.28 16.56Zm-21-71.76A97.44 97.44 0 0 0 408 60.84l6.75 23.28h-20.88l7-23.4a130.34 130.34 0 0 0 3.48-14.4h.24Zm411.23-1.44v-18.6h-73.55v18.6h24.6v73.2h24.35v-73.2h24.6Z" />',

    /* Inland */
    'Inland': '<path transform="translate(128.364 1113.674)" d="M200.892,37.796L200.84,9.276L235.847,9.276L235.847,37.853L200.892,37.796ZM200.84,59.22L235.847,59.044L235.847,182.258L200.84,182.258L200.84,59.22ZM250.989,59.044L285.392,59.044L285.392,69.96C292.425,60.034 310.609,59.458 319.1,59.117C338.878,58.314 367.285,67.944 369.272,92.802L369.272,182.257L335.798,182.257L335.798,106.515C335.672,96.777 327.108,91.896 311.851,91.965C298.177,92.027 289.265,95.359 288.906,106.515L288.906,182.257L250.989,182.257L250.989,59.044ZM585.37,59.044L619.773,59.044L619.773,69.96C626.8,60.034 644.99,59.458 653.475,59.117C673.259,58.314 701.665,67.944 703.653,92.802L703.653,182.257L670.178,182.257L670.178,106.515C670.053,96.777 661.488,91.896 646.225,91.965C632.558,92.027 623.64,95.359 623.286,106.515L623.286,182.257L585.37,182.257L585.37,59.044ZM814.287,183.226C805.032,187.751 794.862,190.096 784.56,190.083C747.139,190.083 716.757,159.701 716.757,122.273C716.757,84.853 747.139,54.471 784.56,54.471C795.22,54.471 805.306,56.937 814.287,61.327L814.287,12.977L852.363,12.977L852.363,186.997L814.287,186.997L814.287,183.226ZM784.56,86.88C765.134,86.889 749.152,102.871 749.143,122.297C749.15,141.724 765.133,157.707 784.56,157.713C803.985,157.703 819.966,141.722 819.976,122.297C819.967,102.872 803.985,86.89 784.56,86.88ZM175.482,45.638L173.498,45.638C98.555,45.645 36.89,107.315 36.89,182.258L0,182.252C0,86.721 77.445,9.276 172.976,9.276L175.482,9.276L175.482,45.638ZM175.482,90.143L174.147,90.143C123.617,90.143 82.038,131.722 82.038,182.252C82.038,182.254 82.038,182.256 82.038,182.258L54.3,182.258C54.31,116.729 108.227,62.81 173.756,62.797L175.482,62.776L175.482,90.143ZM175.48,108.176L175.48,182.258L100.245,182.258C100.245,139.324 131.425,108.145 174.352,108.145L175.48,108.176ZM385.473,9.277L422.364,9.277L422.364,182.258L385.473,182.258L385.473,9.276L385.473,9.277ZM535.357,176.153C524.699,183.241 512.176,187.014 499.377,186.996C463.39,186.996 434.17,157.736 434.17,121.699C434.17,85.656 463.39,56.396 499.376,56.396C512.674,56.396 525.043,60.388 535.356,67.239L535.356,59.044L566.906,59.044L566.906,182.258L535.356,182.258L535.356,176.153L535.357,176.153ZM497.867,91.812C480.754,91.822 466.675,105.901 466.665,123.014C466.674,140.127 480.754,154.204 497.867,154.211C514.978,154.202 529.055,140.125 529.064,123.014C529.057,105.901 514.98,91.821 497.867,91.812Z"></path>',

    /* 3DFillies */
    '3DFillies': '<path transform="translate(128.364 1100.674) scale(0.8)" d="M265.892,221.68C243.412,258.6 213.132,284.08 184.852,297.16C158.852,309.2 132.612,306.02 109.912,290.06C92.712,277.96 76.052,258.54 61.292,237.3C46.432,215.92 34.132,193.28 29.032,172.92C11.312,96.08 56.512,94.2 97.692,93.56C111.492,170.72 139.232,227.26 168.252,252.08C194.252,274.3 227.992,264.66 265.892,221.7L265.892,221.68Z M168.932,0C212.172,0 249.672,12.6 275.572,29.94C299.392,45.88 310.312,69.94 308.492,97.64C307.112,118.62 299.192,142.94 288.732,166.62C278.232,190.44 265.272,212.72 250.552,227.68C194.152,282.8 169.032,245.18 147.052,210.34C205.752,158.42 239.612,105.3 245.692,67.6C251.152,33.84 225.352,10.02 168.932,0.02L168.932,0Z M27.252,193.14C5.832,155.64 -1.808,116.84 0.352,85.74C2.352,57.16 17.712,35.7 42.552,23.5C61.352,14.26 86.292,9.02 111.932,6.32C137.692,3.58 163.352,3.72 183.552,9.06C259.052,30.56 238.992,71.04 219.772,107.46C145.872,82.38 83.232,79.46 47.652,92.94C15.792,105.02 7.972,139.24 27.252,193.14Z M395.792,186.04C398.852,186.04 400.892,185.56 401.932,184.6C402.972,183.64 403.472,181.76 403.472,178.9L403.472,173.12C403.472,170.2 402.932,168.24 401.892,167.26C400.832,166.28 398.812,165.8 395.812,165.8L368.972,165.8L368.972,152.86L392.892,152.86C395.892,152.86 397.892,152.38 398.892,151.42C399.892,150.46 400.412,148.54 400.412,145.64L400.412,141.64C400.412,138.68 399.892,136.74 398.892,135.78C397.892,134.82 395.892,134.34 392.892,134.34L353.612,134.34L353.612,144.28L337.912,144.28L337.912,136.38C337.912,130.42 339.152,126.34 341.612,124.14C344.052,121.92 348.872,120.84 356.052,120.84L399.072,120.84C406.232,120.84 411.052,121.94 413.532,124.14C415.972,126.34 417.212,130.42 417.212,136.38L417.212,143.62C417.212,148.28 416.092,151.74 413.832,154C411.572,156.26 407.592,157.82 401.892,158.74C408.252,159.34 412.892,160.94 415.852,163.54C418.812,166.16 420.292,169.92 420.292,174.92L420.292,183.26C420.292,189.78 418.872,194.24 416.092,196.68C413.292,199.12 408.292,200.32 401.052,200.32L356.272,200.32C349.112,200.32 344.272,199.22 341.792,197C339.312,194.8 338.072,190.72 338.072,184.74L338.072,176.6L354.412,176.6L354.412,186.02L395.892,186.02L395.792,186.04ZM447.712,185.36L471.632,185.36C484.372,185.36 493.372,183.38 498.692,179.44C504.012,175.46 506.672,168.92 506.672,159.8C506.672,151.66 504.472,145.52 500.052,141.34C495.632,137.16 489.112,135.04 480.492,135.04L447.712,135.04L447.712,185.36ZM429.192,200.32L429.192,120.82L480.352,120.82C494.932,120.82 506.152,124.24 514.012,131.04C521.852,137.86 525.772,147.54 525.772,160.08C525.772,167.52 524.232,174.2 521.172,180.12C518.112,186.08 513.792,190.74 508.232,194.16C504.792,196.32 500.492,197.88 495.332,198.86C490.212,199.84 483.612,200.32 475.592,200.32L429.172,200.32L429.192,200.32Z M538.052,200.32L538.052,120.82L618.452,120.82L618.452,134.72L556.572,134.72L556.572,155.64L607.752,155.64L607.752,170.14L556.572,170.14L556.572,200.3L538.052,200.3L538.052,200.32ZM1043.59,134.74L991.572,134.74L991.572,151.82L1041.11,151.82C1048.89,151.82 1054.15,153.14 1056.87,155.8C1059.61,158.46 1060.97,163.4 1060.97,170.64L1060.97,181.54C1060.97,188.76 1059.61,193.68 1056.87,196.36C1054.15,199 1048.89,200.34 1041.11,200.34L992.032,200.34C984.252,200.34 978.992,199 976.272,196.36C973.512,193.7 972.152,188.76 972.152,181.54L972.152,176.04L988.472,175.98L988.472,185.38L1044.63,185.38L1044.63,167.26L995.092,167.26C987.372,167.26 982.152,165.92 979.432,163.28C976.732,160.62 975.372,155.68 975.372,148.44L975.372,139.66C975.372,132.42 976.732,127.5 979.432,124.84C982.152,122.18 987.372,120.86 995.092,120.86L1040.19,120.86C1047.65,120.86 1052.83,122.14 1055.63,124.68C1058.47,127.24 1059.89,131.78 1059.89,138.3L1059.89,143.82L1043.57,143.78L1043.57,134.74L1043.59,134.74ZM877.812,200.32L877.812,120.82L959.212,120.82L959.212,134.34L896.312,134.34L896.312,152.1L948.112,152.1L948.112,165.62L896.312,165.62L896.312,185.34L959.952,185.34L959.952,200.3L877.812,200.3L877.812,200.32ZM841.912,200.32L841.912,120.82L860.412,120.82L860.412,200.32L841.912,200.32ZM751.592,200.32L751.592,120.82L770.092,120.82L770.092,185.36L829.732,185.36L829.732,200.32L751.592,200.32ZM661.272,200.32L661.272,120.82L679.772,120.82L679.772,185.36L739.412,185.36L739.412,200.32L661.272,200.32ZM626.472,200.32L626.472,120.82L644.972,120.82L644.972,200.32L626.472,200.32Z"/>'
}

export default logos