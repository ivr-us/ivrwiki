#!/usr/bin/env zsh
set -e

########################################
# Einstellungen anpassen
########################################

SSH_USER="your_username"
SSH_HOST="server.ivr.uni-stuttgart.de"

LOCAL_PORT=33389
REMOTE_HOST="127.0.0.1"
REMOTE_PORT=3389

RDP_URL="rdp://full%20address=s:127.0.0.1:${LOCAL_PORT}"

########################################
# 1. SSH-Tunnel starten
########################################

if nc -z 127.0.0.1 "${LOCAL_PORT}" 2>/dev/null; then
  echo "Tunnel scheint schon zu laufen (127.0.0.1:${LOCAL_PORT} erreichbar)."
else
  echo "Starte SSH-Tunnel zu ${SSH_USER}@${SSH_HOST} ..."
  ssh -fN -L "${LOCAL_PORT}:${REMOTE_HOST}:${REMOTE_PORT}" "${SSH_USER}@${SSH_HOST}"
  echo "SSH-Tunnel gestartet."
fi

########################################
# 2. RDP-Verbindung mit Windows App öffnen
########################################

open "${RDP_URL}"
