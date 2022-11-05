package com.stage.api.security.services;

import com.stage.api.models.Meme;
import com.stage.api.repository.MemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemeService {
    @Autowired
    private MemeRepository memeRepository;

    public Iterable<Meme> getAll(){
        return memeRepository.findAll();
    }

    public Optional<Meme> getById(Long id){
        return memeRepository.findById(id);
    }

    public Meme save(Meme meme){
        if (meme.getId()== null){
            meme.setCreateAt(LocalDateTime.now());
        }

        meme.setUpdateAt(LocalDateTime.now());
        return memeRepository.save(meme);
    }

    public void delete(Long id){
        memeRepository.deleteById(id);
    }
}
