package org.example.day04back.post;

import java.util.List;

public interface PostRepositoryDsl {
    List<Post> searchByTitle(String word);
}
