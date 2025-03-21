# Multiple API requests : 
```ts
try {
            const [projects, users] = await Promise.all([
                pb.collection('Projects').getFullList({ sort: '-created' }),
                pb.collection('Users').getFullList({ sort: 'name' })
            ]);
```

---
# Objectifs : 
- [ ] Pages de détailles  projets en markdown
- [ ] Création de la base de données 
  - [ ] Table : 
    - [ ] Events
    - [ ] Membres
    - [ ] 