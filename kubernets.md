
https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get

- kubectl describe pod nginx     
- kubectl logs nginx


Create POD
===============

- POD is the smallest deployable unit of kubernetes
- 

Deployment:
================
Deployment -> Replica Set -> POD's

- Now Kubernetes ensure that the total replica set should live. If any pod go down auto healing process will
  recreate it.
- Deployment is the higher level abstraction of Replica Set.
- Deployment is the higher level abstraction of POD.
- Replica set is Controllers of kubernetes
- Controller will ensure the actual state should be equal to desire state

Sample:
----------
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80

- kubectl apply -f nginx-deployment.yaml
- kubectl get deployment
- kubectl get pods
- kubectl get rs    -> return replica sets
- kubectl get pods -w


Kubernetes Service
===================
https://spacelift.io/blog/kubernetes-service